import CodeValidationForm from "@/utils/Forms/Code-Validation-Form";

export default function CodeValidation() {
  return (
    <div className="w-full md:w-2/3  mx-auto my-10 p-5 pt-10 text-foreground bg-background rounded shadow-lg">
      <h1 className="text-center text-3xl">تأكيد كود التفعيل</h1>
      <CodeValidationForm />
    </div>
  )
}
