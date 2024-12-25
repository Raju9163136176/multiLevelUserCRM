import express from 'express'
const router = express.Router()

// only masteragent can access this routes,
router.get("/masteragent",(req, res) => {
    res.json({message:"Welcome masteragent"})
})
// only agent can access this routes,
router.get("/agent",(req, res) => {
    res.json({message:"Welcome agent"})
})
// only counsellor can access this routes,
router.get("/counsellor",(req, res) => {
    res.json({message:"Welcome counsellor"})
})
// only superadmin can access this routes,
router.get("/superadmin",(req, res) => {
    res.json({message:"Welcome superadmin"})
})
// only admin can access this routes,
router.get("/admin",(req, res) => {
    res.json({message:"Welcome admin"})
})
// only processor can access this routes,
router.get("/processor",(req, res) => {
    res.json({message:"Welcome processor"})
})
// only manager can access this routes,
router.get("/manager",(req, res) => {
    res.json({message:"Welcome manager"})
})
// only teamleader can access this routes,
router.get("/teamleader",(req, res) => {
    res.json({message:"Welcome teamleader"})
})
// only developer can access this routes
router.get("/developer",(req, res) => {
    res.json({message:"Welcome developer"})
})
export default router
