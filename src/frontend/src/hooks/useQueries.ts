import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";

interface InquiryFormData {
  name: string;
  contact: string;
  email: string;
  message: string;
  plotNumber: string;
}

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: InquiryFormData) => {
      if (!actor) throw new Error("Actor not initialized");

      await actor.submitInquiry(
        data.name,
        data.contact,
        data.email,
        data.message,
        data.plotNumber,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inquiries"] });
    },
  });
}
