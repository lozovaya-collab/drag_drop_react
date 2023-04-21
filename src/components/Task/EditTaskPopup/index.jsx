import React from "react";

import { Popup, Button } from '../../../components';

const EditTaskPopup = ({ isDialog, show }) => {
  const closePopup = () => {
    show(false);
  }

  const titleElement = () => {
    return (
      <>редактировать задачу</>
    )
  }

  const contentElement = () => {
    return (
      <>
        <div>
          content
        </div>
      </>
    )
  }

  const actionsElement = () => {
    return (
      <>
        <Button onClick={closePopup} type={'text'}>ОТМЕНА</Button>
        <Button onClick={closePopup}>СОХРАНИТЬ</Button>
      </>
    )
  }

  return (
    <Popup
      isOpen={isDialog}
      title={titleElement()}
      content={contentElement()}
      actions={actionsElement()}
    />
  )
}

export { EditTaskPopup }