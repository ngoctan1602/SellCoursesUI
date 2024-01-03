import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from "reactjs-popup";
import InputConfirmInfo from "./InputConfirmInfo";

const PopupAdd = ({ propAdd, itemAdd, updateItemValue, checkEmtyValue, notifyWarning, notifySuccess, notifyError, onSubmit }) => {
    const contentStyle = {
        backgroundColor: '#e1e1e1',
        borderRadius: "8px",
        width: "50%",
    };
    const handleSubmit = (close) => {
        if (checkEmtyValue(itemAdd)) {
            notifyWarning("Vui lòng nhập đầy đủ các trường thông tin")
        }
        else {
            onSubmit(itemAdd)
            notifySuccess("Tạo mới thành công")
        }
    }
    return (
        <Popup trigger={<button class="flex justify-center"> <FontAwesomeIcon icon={faPlus} color="#00B873" class='cursor-pointer confirm-button border-button p-sm border-[1px] w-[40px] h-[40px]'></FontAwesomeIcon></button>}
            position="right center"
            modal
            nested
            closeOnDocumentClick={false}
            {... { contentStyle }}
        >
            {
                close => (
                    <div class='text-16 text-txt '>
                        <p class='text-20 text-center font-bold'>{propAdd.title}</p>
                        <div class='w-full h-[1px] bg-txt my-sm' ></div>
                        {
                            (propAdd.item).map((item, index) => (
                                <div class='w-full my-md gap-sm grid grid-cols-12 items-center'>
                                    <div className="col-span-3 col-start-2">
                                        {item.content}
                                    </div>
                                    {
                                        item.type === "textarea" ?
                                            <textarea className="col-span-7 h-[100px] bg-bgPopup
                                            p-sm rounded-md resize-none
                                            border-txt border-[1px] outline-none"
                                                value={itemAdd[item.name]}
                                                spellCheck="false"
                                                onChange={(e) => updateItemValue(item.name, e.target.value)}
                                            >
                                            </textarea> :
                                            <div div className="col-span-7">
                                                <InputConfirmInfo item={{ type: item.type, placeholder: `${item.placeholder}`, value: itemAdd[item.name], spanWidth: Number(item.spanWidth), name: item.name, background: "#e1e1e1" }} onChange={updateItemValue}></InputConfirmInfo>
                                            </div>
                                    }
                                </div>))
                        }
                        <div class='w-full my-md gap-sm grid grid-cols-12'>
                            <button class='col-start-5 col-span-3 col confirm-button '
                                onClick={() => handleSubmit(close)}
                            >Xác nhận</button>
                            <button class='col-span-3 col-start-9 confirm-button' onClick={close}>Hủy</button>

                        </div>
                    </div>
                )
            }

        </Popup >
    );
}

export default PopupAdd;
