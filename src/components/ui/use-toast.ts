import { toast as sonnerToast } from "sonner";

export const useToast = () => {
    return {
        toast: Object.assign(
            // Base toast function
            (message: string) => sonnerToast(message),
            {
                // Additional methods
                success(message: string) {
                    sonnerToast.success(message);
                },
                error(message: string) {
                    sonnerToast.error(message);
                },
                custom({ title, description, variant = "default" }: { 
                    title?: string; 
                    description: string; 
                    variant?: "default" | "destructive" 
                }) {
                    sonnerToast(title, {
                        description,
                        className: variant === "destructive" ? "bg-red-500" : undefined
                    });
                }
            }
        )
    };
}; 