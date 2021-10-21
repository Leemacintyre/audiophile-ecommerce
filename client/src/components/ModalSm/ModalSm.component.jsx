import React from 'react'
import CustomButton from '../CustomButton/CustomButton.component'
import './ModalSm.styles.scss'
const ModalSm = ({ children, title, handleSubmit, toggleModal }) => {



    return (
        <>
            <div className="addStockItem-wrapper">
                <div className="addStockItem-bgGradient" onClick={() => toggleModal()}></div>
                <div className="addStockItem-container">
                    {/*content*/}
                    <div className="addStockItem-modalBg">
                        {/*header*/}
                        <div className="addStockItem-titleContainer">
                            <h3 className="addStockItem-title" >
                                {title}
                            </h3>

                        </div>
                        {/*body*/}
                        <div className="addStockItem-modalBody">
                            <div className="addStockItem-modalContent">
                                {children}
                            </div>
                        </div>
                        {/*footer*/}
                        <div className="addStockItem-modalFooter">
                            <CustomButton type="submit" close onClick={() => toggleModal()}>CLOSE</CustomButton>
                            <CustomButton type="submit" onClick={(e) => handleSubmit(e)}>UPDATE</CustomButton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalSm