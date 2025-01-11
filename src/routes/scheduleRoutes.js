const express = require("express");
const router = express.Router();
const pool = require("../config/database");

router.get("/:id", async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM vc WHERE id = ?", [
      req.params.id,
    ]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Schedule not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error("Error fetching schedule:", error);
    res.status(500).json({ message: "Internal server error" });
  } finally {
    if (conn) conn.release();
  }
});

module.exports = router;
