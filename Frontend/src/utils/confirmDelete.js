import Swal from "sweetalert2";

export const confirmDelete = async () => {
  const result = await Swal.fire({
    title: "Delete Note?",
    text: "This action cannot be undone.",

    icon: "warning",

    background: "#171717",
    color: "#fff",

    showCancelButton: true,

    confirmButtonText: "Delete",
    cancelButtonText: "Cancel",

    confirmButtonColor: "#ef4444",
    cancelButtonColor: "#06b6d4",

    reverseButtons: true,

    customClass: {
      popup: "rounded-3xl border border-slate-700",
      confirmButton: "rounded-xl",
      cancelButton: "rounded-xl",
    },
  });

  return result.isConfirmed;
};
