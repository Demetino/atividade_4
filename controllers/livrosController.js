import livrosModel from "../models/livrosModel.js";
import { request, response } from "express";

export const livrosControllerGetAll = async (request, response) => {

    try{
        const livros = await livrosModel.find();

        return response.status(200).json(livros);
    }
    catch(error)
    {
        return response.status(500).json({message:"Erro na busca" + error});
    }
};

export const livrosControllerGetById = async (request,response) => {

    try{
        const id = request.params.id;
        const livros = await livrosModel.findById(id);

        if(!livros){ return response.status(404).json({message:"Livro não encontrado!"});}

        return response.status(200).json(livros);
    }
    catch(error)
    {
        return response.status(500).json({message:"Erro na busca" + error});
    }

};

export const livrosControllerPost = async (request,response) => {

    const body = request.body;

        try{
            await livrosModel.create({titulo: body.titulo, autor: body.autor, ano: body.ano, genero: body.genero});

            return response.status(201).json({message:"Livro inserido com sucesso!"}); 
        }
        catch(error)
        {
            return response.status(500).json({message: "Nao foi possível salvar os dados -> "+error});
        }
};

export const livrosControllerPut = async (request,response) => {

    try{
        const id = request.params.id;
        const body = request.body;
        
        const livros = await livrosModel.findOneAndUpdate(
            {_id: id},
            {titulo:body.titulo, autor:body.autor, ano:body.ano, genero:body.genero }
        );

        if(!livros){ return response.status(404).json({message:"Livro não encontrado!"});}

        return response.status(200).json({message: "Ok"});
    }
    catch(error)
    {
        return response.status(500).json({message:"Erro na busca" + error});
    }

};

export const livrosControllerDelete = async (request,response) => {

    try{
        const id = request.params.id;
        
        const livros = await livrosModel.findOneAndDelete({_id: id});

        if(!livros){ return response.status(404).json({message:"Livro não encontrado!"});}

        return response.status(200).json({message: "Ok"});
    }
    catch(error)
    {
        return response.status(500).json({message:"Erro na busca" + error});
    }

};