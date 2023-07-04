"use client";
import BaseModal from "@/components/Global/BaseModalDiv";
import Button from "@/components/Global/Button";
import { deleteUserRoute } from "@/services/api/User";

const DeleteProfileModal = () => {
    const deleteAccount = async () => {
        const token = localStorage.getItem("token");

        if (token) {
            await deleteUserRoute(token);
        }
    };

    return (
        <BaseModal title="Deletar Conta">
            <h3>Tem certeza de que deseja deletar sua conta?</h3>
            <p>
                Essa ação não pode ser desfeita. Isso excluirá permanentemente
                sua conta e removerá seus dados de nossos servidores.
            </p>
            <div>
                <Button name="Cancelar" />
                <Button name="Sim, deletar conta" handleClick={deleteAccount} />
            </div>
        </BaseModal>
    );
};

export default DeleteProfileModal;
