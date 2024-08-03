const handleCadastro = async () => {
  try {
      const response = await axios.post('http://10.140.40.9:3000/api/companies/register', {
          nome, // Certifique-se de que está enviando 'nome'
          cnpj,
          endereco,
          telefone,
          email,
          senha,
      });
      if (response.status === 201) {
          alert('Empresa cadastrada com sucesso!');
      } else {
          alert('Erro ao cadastrar empresa');
      }
  } catch (error) {
      console.error(error);
      alert('Erro ao cadastrar empresa');
  }
};
