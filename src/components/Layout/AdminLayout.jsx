import { faAmbulance, faBook, faCartShopping, faChartSimple, faSchool } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ReactLoading from "react-loading"
const AdminLayout = ({ children }) => {

    let navigate = useNavigate();
    const location = useLocation()
    const [info, setInfo] = useState([
        {
            id: 1, content: "Quản lý khối học / lớp học", icon: faSchool, active: false, path: '/admin/grade-class'
        },
        {
            id: 2, content: "Quản lý chủ đề môn học", icon: faBook, active: false, path: '/'
        },
        {
            id: 3, content: "Quản lý đơn hàng", icon: faCartShopping, active: false, path: '/admin/'
        },
        {
            id: 4, content: "Quản lý tài khoản người dùng", icon: faSchool, active: false, path: '/admin/'
        },
        {
            id: 5, content: "Quản lý giáo viên", icon: faSchool, active: false, path: '/admin/'
        },
        {
            id: 6, content: "Thống kê doanh thu", icon: faChartSimple, active: false, path: '/admin/'
        },

    ])
    const activeInfo = useCallback(() => {
        return () => {
            const updatedItems = info.map(item => {
                if (location.pathname === item.path) {
                    // setContent(item.content);
                    document.title = item.content
                    return { ...item, active: true };
                }

                return { ...item, active: false };

            });
            setInfo(updatedItems);
        }
    }, [info, location.pathname])
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        setLoading(true)
        setTimeout(
            () => {
                setLoading(false)
            }, 3000
        )
    }
    useEffect(() => {
        // const checkData = () => {
        //     if (localStorage.getItem("adminUsername") === null || localStorage.getItem("adminUsername") === '') {
        //         navigate("/admin/login")
        //     }
        // };

        const updateInfo = activeInfo();
        fetchData()
        updateInfo(); // Call the returned function to update seats
        // checkData();
    }, []);
    return (
        <div class='w-full h-[100vh] bg-bg'>

            <div class='w-full h-[60px] shrink-0 bg-gradient-to-br from-button to-[#B0D9B1] grid grid-flow-row grid-cols-11 items-center text-txt text-16'>

                <div class='col-span-2 col-start-1 flex items-center ml-md'>
                    {/* <img class='h-[40px] w-[100px]' src={adminlogo} >

                    </img> */}
                    <p class='ml-sm font-bold uppercase'>Admin Page</p>
                </div>
                <div class='col-span-1 col-start-10 flex items-center'>
                    {/* <img class='h-[40px] w-[40px] rounded-full' src={adminlogo} >

                    </img> */}
                    {/* <p className="ml-sm">{localStorage.getItem("adminUsername")}</p> */}
                </div>

            </div>

            <div className="w-full h-full grid grid-flow-row grid-cols-10 gap-sm">
                <div className="col-span-2  h-full grid grid-cols-1 grid-flow-row ">
                    <div className=" h-[400px] col-span-1 grid grid-cols-1 grid-flow-row  text-16">
                        {
                            info.map((item, index) => (
                                <Link key={item.id}
                                    onClick={activeInfo()}
                                    to={item.path}
                                >
                                    {
                                        item.active ?
                                            <div
                                                className=" h-[60px] col-span-1 m-sm border-button bg-bgPopup  border-[3px] rounded-md shadow-sm grid grid-cols-12 grid-flow-row place-items-center"
                                            >
                                                <FontAwesomeIcon class='ml-sm col-span-2 h-[20px] shrink-0' icon={item.icon} color="#474E68"></FontAwesomeIcon>
                                                <p class='mx-sm col-span-10'> {item.content}</p>

                                            </div> :
                                            <div className="
                                        hover:bg-bgPopup ease-in-out duration-150 hover:scale-[98%]
                                        h-[60px] col-span-1 m-sm border-txt-final border-[1px] rounded-md shadow-sm grid grid-cols-12 grid-flow-row place-items-center">
                                                <FontAwesomeIcon class='ml-sm w-[20px] h-[20px] shrink-0' icon={item.icon} color="#474E68"></FontAwesomeIcon>
                                                <p class='mx-sm col-span-10'>  {item.content}</p>

                                            </div>

                                    }
                                </Link>
                            ))
                        }

                    </div>

                </div>
                <div className="col-span-8 h-full m-md">
                    <div class='w-full  h-full relative '>
                        {/* {
                            loading &&
                            <div class='absolute bg-hover-txt w-[100%] h-full z-20 opacity-40'>
                                <ReactLoading
                                    type="spinningBubbles" color="#e1e1e1"
                                    height={'10%'} width={'10%'}
                                    className="absolute left-[50%] top-[50%]"
                                />
                            </div>
                        } */}
                        {children}
                    </div>
                </div>
            </div>

        </div >
    );
}

export default AdminLayout;