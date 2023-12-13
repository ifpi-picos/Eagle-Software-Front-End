export const cadastrarUsuario = async (formData) => {
    try {
        const response = await fetch('https://api-eagles-software.onrender.com/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const data = await response.json();
            return { success: true, data };
        } else {
            const errorData = await response.json();
            return { success: false, error: errorData.error || 'Erro desconhecido' };
        }
    } catch (error) {
        console.error('Erro inesperado:', error);
        return { success: false, error: 'Erro interno do servidor' };
    }
};


export const fazerLogin = async (formData) => {
    try {
        const response = await fetch('https://api-eagles-software.onrender.com/usuarios/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const data = await response.json();
            return { success: true, data };
        } else {
            const errorData = await response.json();
            return { success: false, error: errorData.error || 'Credenciais inválidas' };
        }
    } catch (error) {
        console.error('Erro inesperado:', error);
        return { success: false, error: 'Erro interno do servidor' };
    }
};