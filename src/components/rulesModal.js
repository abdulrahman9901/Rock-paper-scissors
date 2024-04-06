import React, { useState } from 'react';
import { Button, Modal,ConfigProvider } from 'antd';
import rules from '../images/image-rules.svg'
const RulesModal= () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

 

  return (
    <ConfigProvider
    theme={{
      token: {
        titleFontSize:'25px' ,
      },
    }}
  >
      <Button className='rules' onClick={showModal}>
        Rules
      </Button>
      <Modal centered sidth={200} styles={{width:'200px' , fontSize:'25px !important'}} title="Rules" footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <img src={rules}></img>
      </Modal>
      </ConfigProvider>
    
  );
};

export default RulesModal;