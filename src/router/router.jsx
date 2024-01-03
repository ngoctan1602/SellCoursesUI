import ManageClass from "../pages/Admin/MangeClass"

const publicRoutes = [
    //Không cần đăng nhập vẫn xem được
    {
        path: "/", component: ""
    },

]
const privateRoutes = [
    {
        path: "/info", component: ""
    },
]

const adminRouter = [
    {
        path: "/admin/grade-class", component: ManageClass
    },
]

const teacherRouter = [

]

export { publicRoutes, privateRoutes, adminRouter, teacherRouter }