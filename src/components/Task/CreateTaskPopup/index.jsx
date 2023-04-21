import React from "react";

import { Popup, Button } from '../../../components';

const CreateTaskPopup = ({ isDialog, show }) => {
  const closePopup = () => {
    show(false);
  }

  const titleElement = () => {
    return (
      <>создать задачу</>
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

export { CreateTaskPopup }


// <script>
// import { apiService } from "../../../shared/api/swagger/swagger";

// import ContentPopup from "../ContentPopup";
// import { Popup, Button } from "@/components/UI";

// export default {
//   name: "CreateTaskPopup",
//   props: ["statusId", "tasks", "isOpen"],
//   components: {
//     ContentPopup,
//     Popup,
//     Button,
//   },
//   data() {
//     return {
//       task: null,
//     };
//   },
//   computed: {
//     isDialog: {
//       get() {
//         return this.isOpen;
//       },
//       set(value) {
//         this.$emit("update:isOpen", value);
//       },
//     },
//   },
//   methods: {
//     closePopup() {
//       this.task = null;
//       this.isDialog = false;
//     },
//     saveTask() {
//       apiService.tasks.Create(this.task).then(() => {
//         apiService.tasks
//           .Get()
//           .then((res) => {
//             this.$emit("update:tasks", res.data);
//           })
//           .then(() => {
//             this.closePopup();
//           });
//       });
//     },
//   },
//   mounted() {
//     this.task = {
//       status_id: this.statusId,
//       title: null,
//       description: null,
//     };
//   },
// };
// </script>
