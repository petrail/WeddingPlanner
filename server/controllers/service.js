const Service = require("../models/service");
exports.get_services_display = async (req, res) => {
  try {
    const { type } = req.body
    const service = await Service.find({type:type});
    let to_return=[]
    service.forEach(item=>{
        to_return.push({
            "_id":item._id,
            "name":item.name,
            "img":item.img,
            "description":item.description
        });
    });
    res.status(200).json(to_return);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

exports.get_service_by_id = async (req, res) => {
    try {
      const { id } = req.params;
      const service = await Service.findById(id);
      res.status(200).json(service);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

exports.add_service_review = async (req, res) => {
  try {
    let service = await Service.findById(req.body._id);
    if(req.body.review==null){
        return res
            .status(404)
            .json({ message: `No review found!` });
      }

    if (!service) {
        return res
          .status(404)
          .json({ message: `Service with id ${id} not found` });
      }
    service.reviews.push(req.body.review);
    await Service.findByIdAndUpdate(req.body._id, service);
    const updated = await Service.findById(req.body._id);
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.add_reserve_date = async (req, res) => {
    try {
      if(req.body.reserved_date==null){
        return res
            .status(404)
            .json({ message: `No reserve date found!` });
      }

      let service = await Service.findById(req.body._id);
      if (!service) {
          return res
            .status(404)
            .json({ message: `Service with id ${id} not found` });
        }
      service.reserved_dates.push(req.body.reserved_date);
      await Service.findByIdAndUpdate(req.body._id, service);
      const updated = await Service.findById(req.body._id);
      res.status(200).json(updated);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
