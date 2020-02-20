const petModel = require("model/petshop.js");
const petController = {
    index: (req,res) => {
        res.send(petModel.listarPets());
    },
    add: (req,res) => {
        let novoPet = req.params;
        petModel.adicionarPet(novoPet);
        res.send(`Opa, ${novoPet.nome} foi adicionado com sucesso!`);

    },
    buscar: (req,res) => {
        let pet = req.params.nome;
        let petsEncontrados = petModel.buscarPet(pet.nome)
        if(petsEncontrados.length > 0){
        res.send(`Opa temos ${petsEncontrados.length} pets encontrados`);
        } else {
            res.send(`Não encontramos nenhum pet com o nome ${nomePet} :(`);
        }
    }

};

module.exports = petController;