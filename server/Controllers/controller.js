const Cakes = require('../Models/models');
// const Ratings = require('../Models/models');

module.exports = {
    allCakes:(req,res)=>{
        Cakes.find().sort({type:1})
        .then(data=> {
            res.json({ message: "success", results: data});
        })
        .catch(err => {
            res.json({ message: "error", results: err });
        })
    },
    oneCake: (req,res) => {
        Cakes.findOne({_id: req.params.id})
            .then(data => {
                res.json({ message: "success", results: data });

            })
            .catch(err => {
                res.json({ message: "error", results: err });
            })
    },
    createCake: (req,res) => {
        Cakes.create(req.body)
            .then(data => {
                res.json({ message: "success", results: data});

            })
            .catch(err => {
                res.json({ message: "error", results: err });
            })
    },
    updateCake: (req,res) => {
            Cakes.findByIdAndUpdate({_id: req.params.id},
                {name:req.body.name,type:req.body.type,description:req.body.description,
                    skills:{skillOne:req.body.skills.skillOne,skillTwo:req.body.skills.skillTwo,skillThree:req.body.skills.skillThree}} ,
                {runValidators:true})
            .then(data=> res.json({ message: "success", results: data}))
            .catch(err=>res.json({ message: "error", results: err }) )
            
    },
    voteUp: (req,res) => {
            Cakes.updateOne({_id: req.params.id },{$inc: {likes: 1 }})
            .then(data=> {
                console.log(data);
                res.json({ message: "success", results: data});
            })
            .catch(err=>res.json({ message: "error", results: err }) )
            
    },
    voteDown: (req,res) => {
        Cakes.updateOne({"quotes._id": req.params.id },{$inc: {"quotes.$.votes": -1 }})
        .then(data=> {
            console.log(data);
            res.json({ message: "success", results: data});
        })
        .catch(err=>res.json({ message: "error", results: err }) )
            
    },
    addQuotes: (req,res) => {
            Cakes.findOneAndUpdate({_id: req.params.id},{ $push: { quotes: {quote:req.body.quote}} }, {runValidators:true})
            .then(data=> res.json({ message: "success", results: data}))
            .catch(err=>res.json({ message: "error", results: err }) )
            
    },
    deleteCake: (req,res) => {
        Cakes.findOneAndDelete({_id: req.params.id})
            .then(data => {
                res.json({ message: "success", results: data});

            })
            .catch(err => {
                res.json({ message: "error", results: err });
            })
    },
    deleteQuote: (req,res) => {
        Cakes.findOneAndUpdate({_id: req.params.id},{$pull:{quotes:{quote:req.params.quote}}})
            .then(data => {
                res.json({ message: "success", results: data});

            })
            .catch(err => {
                res.json({ message: "error", results: err });
            })
    }
   
}
