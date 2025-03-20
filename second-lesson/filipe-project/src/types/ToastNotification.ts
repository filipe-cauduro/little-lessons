export interface ToastNotification {
  title?: string;
  content: string;
  type: "warn" | "danger" | "info" | "success";
}
