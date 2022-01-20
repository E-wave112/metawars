import commentsService from "./comments.service";
import { Request,Response } from "express";
import { Movie } from "../movies/movies.entity";
import { getRepository } from "typeorm";

class CommentController {
    public service = commentsService
    public movieModel = Movie

    public getAllCommentsController =async (req:Request,res:Response) => {
        try {
            const allComments = await this.service.getComments()
            return res.status(200).json({message:allComments})
        } catch (err:any) {
            console.error(err)
            return res.status(500).json({message:err.message})
        }
        
    }

    
    public addCommentsController =async (req:Request,res:Response) => {
        try {
            const movieRepo = getRepository(Movie) 
            const findMovie = await movieRepo.findOne({movieName:req.body.movie})
            if (!findMovie) return res.status(404).json({message:"movie not found!"})
            const commentObj = {
                userIp:req.socket.remoteAddress,
                comment:req.body.comment,
                movie:findMovie?.id
            }
            findMovie.commentCounts = findMovie.commentCounts + 1
            await findMovie.save()
            const newComment = await this.service.addComments(commentObj)
            return res.status(200).json({message:newComment})
        } catch (err:any) {
            console.error(err)
            return res.status(500).json({message:err.message})
        }
        
    }
}

export default new CommentController()