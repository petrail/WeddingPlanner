const Service = require("../models/service");
exports.get_all_services = async (req, res) => {
  try {
    const service = await Service.find({});
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.post_service = async (req, res) => {
  try {
    const service = await Service.create(req.body);
    res.status(200).json(service);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
exports.delete_service_by_id = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Service.findByIdAndDelete(id);
    if (!service) {
      return res.status(404).json({ message: `User with id ${id} not found` });
    }
    res.status(200).json(service);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.get_services_by_ids = async (req, res) => {
  try {
    const { ids } = req.body;
    const services = await Service.find({ _id: { $in: ids } });
    let to_return = [];
    services.forEach((item) => {
      to_return.push({
        _id: item._id,
        name: item.name,
        img: item.img,
        servicePrice: item.servicePrice
      });
    });
    res.status(200).json(to_return);
  } catch (error) {
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
exports.put_service = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Service.findById(id);
    if (!service) {
      return res
        .status(404)
        .json({ message: `Service with id ${id} not found` });
    }

    // Update the user with the request body
    await Service.findByIdAndUpdate(id, req.body);

    // Fetch the updated user
    const updatedService = await Service.findById(id);

    res.status(200).json(updatedService);
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

    let date_taken = false;
    service.reserved_dates.forEach((r) => {
      if (r.date == req.body.reserved_date) {
        date_taken = true;
      }
    });
    if (date_taken) {
      return res.status(404).json({ message: `Date taken!` });
    }

    let d = {
      date: req.body.reserved_date,
    };
    service.reserved_dates.push(d);
    await Service.findByIdAndUpdate(req.body._id, service);
    const updated = await Service.findById(req.body._id);
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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
        servicePrice: item.servicePrice
      });
    });
    res.status(200).json(to_return);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

exports.get_all_subcategories = async (req, res) => {
  try {
    const { type } = req.body;
    const service = await Service.find({ type: type });
    let to_return = [];
    service.forEach((item) => {
      if(!to_return.includes(item.subservice))
          to_return.push(item.subservice);
    });
    res.status(200).json(to_return);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

exports.get_service_filtered = async (req, res) => {
  try {
    const { name, minPrice, maxPrice, type, subservice, startIndex, count, sort } = req.body;

    const filter = {};
    if (name) {
      filter.name = { $regex: name, $options: 'i' };
    }
    if (minPrice && maxPrice) {
      filter['servicePrice.price'] = { $gte: minPrice, $lte: maxPrice };
    } else if (minPrice) {
      filter['servicePrice.price'] = { $gte: minPrice };
    } else if (maxPrice) {
      filter['servicePrice.price'] = { $lte: maxPrice };
    }
    if (type) {
      filter.type = type;
    }
    if (subservice) {
      filter.subservice = subservice;
    }
    const sortOpt={};
    if(sort==='asc'){
      sortOpt['servicePrice.price'] = 1;
    }
    else if(sort=='desc'){
      sortOpt['servicePrice.price']=-1;
    }
    let items = await Service.find(filter);
    const has_more = items.length > (startIndex+count);
    items = await Service.find(filter)
      .sort(sortOpt)
      .skip(Number(startIndex))
      .limit(Number(count));
    let to_return = {
      has_more:has_more,
      predmeti:[]
    };

    items.forEach((item) => {
      to_return.predmeti.push({
        _id: item._id,
        name: item.name,
        img: item.img,
        servicePrice: item.servicePrice
      });
    });
    res.status(200).json(to_return);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching items.' });
  }
};
