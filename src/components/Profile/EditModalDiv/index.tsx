import BaseModal from "@/components/Global/BaseModalDiv";
import RegisterUserInputs from "@/components/Global/RegisterUserInputsDiv";

const EditModal = () => {
    return (
        <BaseModal title="Editar Perfil">
            <RegisterUserInputs />
        </BaseModal>
    );
};

export default EditModal;
