import routes from '../routes';
import Video from '../models/Video';

export const home = async (req, res) => {

    try {
        const videos = await Video.find({}).sort({_id: -1});
        res.render("home",  {pageTitle: "Home", videos});

    } catch (error) {
        console.log(error);
        res.render("home",  { pageTitle: "Home", videos: [] });
    };
    
};

export const search = async (req, res) => {
    const {
        query: {
            term : searchingBy
        }
    } = req;
    // req.query.term과 동일

    let videos = [];

    try {
        videos = await Video.find({
            title: { $regex: searchingBy, $options: "i" }
        });

    } catch (error) {
        console.log(error);
    }
    res.render("search",  {pageTitle: "Search", searchingBy, videos});
};

// video upload
export const getUpload = (req, res) => {
    res.render("upload",  {pageTitle: "Upload"});
};

export const postUpload = async (req, res) => {
    const {
        body: {
            title, description
        },
        file: {
            path
        }
    } = req;
    // req.body.file과 같음

    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });

    res.redirect(routes.videoDetail(newVideo.id));
};


export const videoDetail = async (req, res) => {

    const {
        params: {
            id
        }
    } = req;

    try {
        const video = await Video.findById(id);
        res.render("videoDetail", {pageTitle: video.title, video});
        console.log(video)
    } catch (error) {
        // 에러 발생 시 홈으로 리다이렉트
        console.log(error);
        res.redirect(routes.home);
    }
};

export const getEditVideo = async (req, res) => {
    const {
        params: {
            id
        }
    } = req;

    try {
        const video = await Video.findById(id);
        res.render("editVideo",  {pageTitle: `Edit: ${video.title}`, video});

    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
}

export const postEditVideo = async (req, res) => {

    const {
        params: {
            id
        },
        body: {
            title, description
        }
    } = req;

    try {
        await Video.findByIdAndUpdate({ _id: id}, {title, description});
        res.redirect(routes.videoDetail(id));

    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
}

export const deleteVideo = async (req, res) => {
    const {
        params: {
            id
        },
    } = req;

    try {
        await Video.findOneAndDelete({_id: id});

    } catch (error) {
        console.log(error);
    }
    
    res.redirect(routes.home);
}

