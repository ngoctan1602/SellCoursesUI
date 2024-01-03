import { useEffect, useState } from "react";
import * as GradeSV from "../../services/Admin/GradeSV"
import ReactLoading from "react-loading"
import InputConfirmInfo from "../../components/Components/Shared/InputConfirmInfo"
import PopupAdd from "../../components/Components/Shared/PopupAdd";
const ManageClass = ({ notifyWarning, notifySuccess, notifyError, loading, updateLoading }) => {
    const [grades, setGrades] = useState([
    ])
    const fetchData = async () => {
        updateLoading(true)
        const data = await GradeSV.getAllGrade();
        setTimeout(
            () => {
                updateLoading(false)
                setGrades(data.data.data)
            }, 2000
        )

        console.log(data.data)
    }
    useEffect(
        () => {
            fetchData()
        }, []
    )

    const [itemAdd, setItemAdd] = useState({
        name: '',
        decription: '',
    });

    const checkEmtyValue = (itemAdd) => {
        if (itemAdd.name === "" || itemAdd.name === undefined || itemAdd.name === null)
            return true
        return false
    }
    const propAdd = {
        title: "Thêm mới khối học",
        item: [
            {
                id: 1, name: "name", content: "Tên khối học", spanWidth: 120, placeholder: "Tên khối học", type: "text"
            },
            {
                id: 2, name: "decription", content: "Mô tả", spanWidth: 100, placeholder: "Thêm mô tả", type: "textarea"
            },

        ]
    }
    const addGrade = async (itemAdd) => {
        const resp = await GradeSV.addGrade(itemAdd)
    }
    const updateItemValue = (name, value) => {
        setItemAdd({ ...itemAdd, [name]: value })
    };
    const [classes, setClasses] = useState([
        {
            id: 1, content: "Lớp 1", description: "Đây là lớp 1",
        },
        {
            id: 2, content: "Lớp 2", description: "Đây là lớp 2",
        },
        {
            id: 3, content: "Lớp 3", description: "Đây là lớp 3",
        },
        {
            id: 4, content: "Lớp 4", description: "Đây là lớp 4",
        }

    ])

    const activeGrades = (id) => {
        const updatedItems = grades.map(item => {
            if (item.id === id) {
                return { ...item, active: true }
            }
            return { ...item, active: false }
        }
        )
        setGrades(updatedItems)
    }
    return (
        <div className="text-18 grid grid-flow-row grid-cols-12 gap-md"
        >
            <div className="col-span-6 min-h-[600px] rounded-md">

                <div className="w-full flex justify-between">
                    <p>
                        Danh sách khối học
                    </p>
                    <PopupAdd propAdd={propAdd} itemAdd={itemAdd} updateItemValue={updateItemValue}
                        checkEmtyValue={checkEmtyValue}
                        notifyWarning={notifyWarning}
                        notifySuccess={notifySuccess}
                        notifyError={notifyError}
                        onSubmit={addGrade}
                    />
                </div>
                <table class="w-full my-md rounded-md border-collapse min-h-[400px] text-txt text-16 overflow-hidden relative">
                    {
                        loading &&
                        <div class='absolute bg-hover-txt w-[100%] h-full z-20 opacity-80'>
                            <ReactLoading
                                type="spinningBubbles" color="#e1e1e1"
                                height={'10%'} width={'10%'}
                                className="absolute left-[50%] top-[40%]"
                            />
                        </div>
                    }
                    <thead>
                        <tr class='grid bg-button grid-cols-12 p-sm text-left'>

                            <th class='col-span-4'>Tên khối học</th>
                            <th class='col-span-4'>Mô tả</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            !loading && grades.length > 0 ?
                                grades.map(item =>
                                    <tr className={`${item.active ? "bg-button" : "bg-bgPopup"} grid-cols-12 p-sm grid cursor-pointer ease-in-out duration-150 hover:bg-button`}

                                        onClick={() => activeGrades(item.id)}
                                    >
                                        <td class='col-span-4'>{item.name}</td>
                                        <td class='col-span-4'>{item.decription}</td>
                                    </tr>
                                )
                                : !loading && grades.length === 0 &&
                                <tr>
                                    Không có khối học nào
                                </tr>
                        }

                    </tbody>
                </table>
            </div>
            <div className="col-span-6 min-h-[600px] col-start-7">
                Danh sách lớp học
                <table class="w-full my-md rounded-md border-collapse  text-txt text-16 overflow-hidden">

                    <thead>
                        <tr class='grid bg-button grid-cols-12 p-sm text-left'>

                            <th class='col-span-4'>Tên lớp học</th>
                            <th class='col-span-4'>Mô tả</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            classes.length > 0 &&
                            classes.map(item =>
                                <tr className={`${item.active ? "bg-button" : "bg-bgPopup"} grid-cols-12 p-sm grid cursor-pointer ease-in-out duration-150 hover:bg-button`}
                                >
                                    <td class='col-span-4'>{item.content}</td>
                                    <td class='col-span-4'>{item.description}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>



            </div>
        </div>
    );
}

export default ManageClass;