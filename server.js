const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express(), PORT = process.env.PORT || 3000;
const DB = path.join(__dirname, "exams.json");
const defaults = require("./exams.json");
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));
function load() {
  try {
    let rows = JSON.parse(fs.readFileSync(DB,"utf8"));
    // Backward-compatible migration: older timetable files had no category field.
    let changed = false;
    rows = rows.map((e,i) => {
      if (!e.type) { e.type = (String(e.code||"").endsWith("P") && !String(e.code).includes("IT")) || e.venue==="I103" || e.venue==="I202" || e.venue==="I201" ? "practical" : "theory"; changed=true; }
      if (!e.session) { e.session = e.type==="theory" ? (e.exam_time==="FN" ? "FN - Forenoon" : "To be announced") : "To be announced"; changed=true; }
      return e;
    });
    if (changed) fs.writeFileSync(DB,JSON.stringify(rows,null,2));
    return rows;
  } catch(err) { fs.writeFileSync(DB,JSON.stringify(defaults,null,2)); return defaults; }
}
app.get("/api/exams",(req,res)=>res.json(load().sort((a,b)=>a.exam_date.localeCompare(b.exam_date))));
app.get("/api/health",(req,res)=>res.json({status:"ok",message:"Mohanraj V Exam Portal backend is running"}));
app.listen(PORT,()=>console.log(`Mohanraj V Exam Portal running at http://localhost:${PORT}`));
