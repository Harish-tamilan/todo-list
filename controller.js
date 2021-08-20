const model = require('./model');

exports.getIndex = (req, res, next)=>{
    model.findAll().then((items)=>{
        res.render('view',{
            items:items,
            edit:false
        });
    });
}

exports.addItem = (req, res, next)=>{
    console.log('inside addItem in controller.js');
    const title = req.body.title;
    const time = req.body.time;
    console.log('title is ',title, 'time is ',time);
    model.create({
        title:title,
        timeLimit:time
    }).then(result=>{
        res.redirect("/");
    }).catch(err=>console.log('error in adding the item, err is ',err));
}

exports.getEditItem = (req, res, next)=>{
    console.log('inside editItem in controller.js');
    const id = req.params.id;

    model.findByPk(id).then((item)=>{
        model.findAll().then((items)=>{
            res.render('view',{
                items:items,
                edit:true,
                item:item
            });
        }).catch(err=>console.log('error in findAll in editItem in controller.js'));
    }).catch(err=>console.log('error in findByPk in editItem method in controller.js '))
}

exports.postEditItem = (req,res,next)=>{
    const id = req.body.id;
    const title = req.body.title;
    const time = req.body.time;
    model.findByPk(id).then((item)=>{
        console.log('found item is ', item.title);
        item.title = title;
        item.timeLimit = time;
        return item.save();
    }).then(response => res.redirect("/")).catch(err=>console.log('error'));
}

exports.delete = (req, res, next)=>{
    const id = req.params.id;

    model.findByPk(id).then((item)=>{
        return item.destroy();
    }).then((response)=>res.redirect("/")).catch(err => console.log('error'));
}


