import React from 'react'
import CustomButton from '../CustomButton/CustomButton.component'
import './ModelSm.styles.scss'
const ModelSm = ({ children, title, handleSubmit }) => {
    return (
        <>
            <div
                className="addStockItem-wrapper"
            >
                <div className="addStockItem-container">
                    {/*content*/}
                    <div className="addStockItem-modalBg">
                        {/*header*/}
                        <div className="addStockItem-titleContainer">
                            <h3 className="text-3xl font-semibold">
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
                            <CustomButton type="submit" close onClick={e => handleSubmit(e)}>CLOSE</CustomButton>
                            <CustomButton type="submit" onClick={e => handleSubmit(e)}>UPDATE</CustomButton>
                        </div>
                    </div>
                </div>
            </div>
            <div className="addStockItem-bgGradient"></div>
        </>
    )
}

export default ModelSm