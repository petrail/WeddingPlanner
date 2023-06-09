const Service = require("../models/service");
exports.get_services_display = async (req, res) => {
  try {
    const { type } = req.params;
    const service = await Service.find({ type: type });
    let to_return = [];
    service.forEach((item) => {
      to_return.push({
        _id: item._id,
        name: item.name,
        img: item.img,
        store: item.store,
      });
    });
    res.status(200).json(to_return);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

exports.get_service_filtered = async (req, res) => {
  try {
    const { name, minPrice, maxPrice, type, subservice, startIndex, count } = req.query;

    // Constructing the filter object
    const filter = {};
    if (name) {
      filter.name = { $regex: name, $options: 'i' }; // Case-insensitive name search
    }
    if (minPrice && maxPrice) {
      filter.price = { $gte: minPrice, $lte: maxPrice };
    } else if (minPrice) {
      filter.price = { $gte: minPrice };
    } else if (maxPrice) {
      filter.price = { $lte: maxPrice };
    }
    if (type) {
      filter.type = type;
    }
    if (subservice) {
      filter.subservice = subservice;
    }
    const items = await Service.find(filter)
      .skip(Number(startIndex))
      .limit(Number(count));
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching items.' });
  }
}
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
    if (req.body.review == null) {
      return res.status(404).json({ message: `No review found!` });
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
    if (req.body.reserved_date == null) {
      return res.status(404).json({ message: `No reserve date found!` });
    }

    let service = await Service.findById(req.body._id);
    if (!service) {
      return res
        .status(404)
        .json({ message: `Service with id ${id} not found` });
    }

    let date_taken= false;
    service.reserved_dates.forEach(r=>{
      if(r.date==req.body.reserved_date){
        date_taken=true;
      }
    });
    if(date_taken){
      return res
        .status(404)
        .json({ message: `Date taken!` });
    }

    let d = {
      date: req.body.reserved_date
    }
    service.reserved_dates.push(d);
    await Service.findByIdAndUpdate(req.body._id, service);
    const updated = await Service.findById(req.body._id);
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
