import Swal, { SweetAlertOptions } from 'sweetalert2';

export const switchAlert = ({ icon, title, text }: SweetAlertOptions) => {
  Swal.fire({
    icon,
    title,
    text,
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.reload();
    }
  });
};
