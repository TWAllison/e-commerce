const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  Tag.findAll({
    include: [
      {
        model: Product,
        attributes: ["id", "product_name","price", "stock", "category_id"],
      }
    ]
  })
    .then(results => res.json(results))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "categoty_id"],
      }
    ]
  })
    .then(results => {
      if (!results) {
        res.status(404).json({ message: "No tag found with this id" });
        return;
      }
      res.json(results);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name
  })
    .then(results => res.json(results))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(results => {
      if (!results[0]) {
        res.status(404).json({ message: "No tag found with this id" });
        return;
      }
      res.json(results);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(results => {
      if (!results) {
        res.status(404).json({ message: "No tag found with this id" });
        return;
      }
      res.json(results);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
