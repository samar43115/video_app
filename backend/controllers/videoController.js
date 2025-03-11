const Video = require('../model/video.model')



exports.getVideos = async (req, res) => {
    try {
      const videos = await Video.find();
      console.log("Videos in DB: ",videos)
      res.status(200).json(videos);
    } catch (error) {
      res.status(500).json({ message: "Error fetching videos", error });
    }
  };
  

  exports.uploadVideo = async (req, res) => {
    try {
      const { title,description} = req.body;
      const videoUrl = `http://localhost:4444/uploads/video${req.file.filename}`;
      const thumbnail = `http://localhost:4444/uploads/thumbnail${req.file.filename}.jpg`;
       
      const newVideo = new Video({ title, description,thumbnail, videoUrl });
      await newVideo.save();
      res.status(201).json(newVideo);
    } catch (error) {
      res.status(500).json({ message: "Upload failed", error });
    }
  };
  
 
  exports.getVideoById = async (req, res) => {
    try {
      const video = await Video.findById(req.params.id);
      if (!video) return res.status(404).json({ message: "Video not found" });
      res.status(200).json(video);
    } catch (error) {
      res.status(500).json({ message: "Error fetching video", error });
    }
  };
  