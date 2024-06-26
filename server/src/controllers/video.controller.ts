import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface Video {
    videoId: number;
    title: string;
    link: string;
    dateOfPublishing: Date;
}

export const getAllVideos = async (req: Request, res: Response) => {
    try {
        const videos: Video[] = await prisma.videos.findMany();
        res.status(200).json(videos);
    } catch (error) {
        console.error("Error while fetching videos: ", error);
        res.status(500).json({
            success: false,
            msg: 'Error while fetching videos'
        });
    };
};

export const handleGetOneVideo = async (req: Request, res: Response) => {
    try {
        const videoId = Number(req.query.videoId);
        // console.log(videoId);
        if(isNaN(videoId)){
            return res.status(400).json({
                success: false,
                msg: "Invalid video ID"
            })
        };
        const video = await prisma.videos.findUnique({
            where: {
                videoId: videoId
            }
        });
        if(!videoId){
            return res.status(404).json({
                success: false,
                msg: "Video not found"
            })
        };

        res.status(200).json({
            success: true,
            video
        });
    } catch (error) {
        console.error("Error while fetching video: ", error);
        res.status(500).json({
            success: false,
            msg: "Error while fetching video"
        });
    };
};