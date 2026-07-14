import Swal from "sweetalert2";

export const confirmLogout = async () => {
  const result = await Swal.fire({
    title: "Logout?",

    text: "You will need to login again.",

    icon: "question",

    background: "#171717",

    color: "#fff",

    showCancelButton: true,

    confirmButtonText: "Logout",

    cancelButtonText: "Stay",

    confirmButtonColor: "#06b6d4",

    cancelButtonColor: "#374151",

    reverseButtons: true,
  });

  return result.isConfirmed;
};
