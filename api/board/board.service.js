import {dbService} from '../../services/db.service.js'
import {logger} from '../../services/logger.service.js'
import {utilService} from '../../services/util.service.js'
import mongodb from 'mongodb'
const {ObjectId} = mongodb

const PAGE_SIZE = 3


async function query(filterBy={txt:''}) {
    try {
        const criteria = {
            // vendor: { $regex: filterBy.txt, $options: 'i' }
        }
        const collection = await dbService.getCollection('board')
        var boards = await collection.find().toArray() //criteria

        // if (filterBy.pageIdx !== undefined) {
        //     boardCursor.skip(filterBy.pageIdx * PAGE_SIZE).limit(PAGE_SIZE)     
        // }

        // const boards = boardCursor.toArray()
        return boards
    } catch (err) {
        logger.error('cannot find boards', err)
        throw err
    }
}

async function getById(boardId) {
    try {
        console.log('boardId:', boardId)
        const collection = await dbService.getCollection('board')
        const board = collection.findOne({ _id: new ObjectId(boardId) })
        return board
    } catch (err) {
        logger.error(`while finding board ${boardId}`, err)
        throw err
    }
}

async function remove(boardId) {
    try {
        const collection = await dbService.getCollection('board')
        await collection.deleteOne({ _id: new ObjectId(boardId) })
        return boardId
    } catch (err) {
        logger.error(`cannot remove board ${boardId}`, err)
        throw err
    }
}

async function add(board) {
    try {
        const collection = await dbService.getCollection('board')
        await collection.insertOne(board)
        return board
    } catch (err) {
        logger.error('cannot insert board', err)
        throw err
    }
}

async function update(board) {
    try {
        const boardToSave = {
            title: board.title,
            desc: board.desc,
            activities: board.activities,
            members: board.members,
            statusLabelConfig: board.statusLabelConfig,
            priorityLabelConfig: board.priorityLabelConfig,
            cmpConfig: board.cmpConfig,
            groups: board.groups,
        }
        // const boardId = board._id
        // delete board._id
        const collection = await dbService.getCollection('board')
        await collection.updateOne({ _id: new ObjectId(board._id) }, { $set: boardToSave })
        return board
    } catch (err) {
        logger.error(`cannot update board ${board._id}`, err)//${boardId}
        throw err
    }
}

// async function addBoardMsg(boardId, msg) {
//     try {
//         msg.id = utilService.makeId()
//         const collection = await dbService.getCollection('board')
//         await collection.updateOne({ _id: ObjectId(boardId) }, { $push: { msgs: msg } })
//         return msg
//     } catch (err) {
//         logger.error(`cannot add board msg ${boardId}`, err)
//         throw err
//     }
// }

// async function removeBoardMsg(boardId, msgId) {
//     try {
//         const collection = await dbService.getCollection('board')
//         await collection.updateOne({ _id: ObjectId(boardId) }, { $pull: { msgs: {id: msgId} } })
//         return msgId
//     } catch (err) {
//         logger.error(`cannot add board msg ${boardId}`, err)
//         throw err
//     }
// }

export const boardService = {
    remove,
    query,
    getById,
    add,
    update,
    // addBoardMsg,
    // removeBoardMsg
}
