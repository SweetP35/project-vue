import { computed, watch } from "vue";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
export function useLoginForm() {
    const { handleSubmit, isSubmitting, submitCount } = useForm();
    const {
        value: email,
        errorMessage: eError,
        handleBlur: eBlur,
    } = useField(
        "email",
        yup
            .string()
            .trim()
            .required("Пожалуйста введите email")
            .email("Необходимо ввести корректный email")
    );
    const MIN_LENGTH = 6;
    const {
        value: password,
        errorMessage: pError,
        handleBlur: pBlur,
    } = useField(
        "password",
        yup
            .string()
            .trim()
            .required("Пожалуйста введите пароль")
            .min(MIN_LENGTH, `Пароль не может быть меньше ${MIN_LENGTH} символов`)
    );

    const isTooManyAttempts = computed(() => submitCount.value >= 3);
    watch(isTooManyAttempts, val => {
        if (val) {
            setTimeout(() => submitCount.value = 0, 1500)
        }
    })

    const onSubmit = handleSubmit((values) => { });
    return {
        email,
        eError,
        eBlur,
        password,
        pError,
        pBlur,
        onSubmit,
        isSubmitting,
        isTooManyAttempts,
    };
}