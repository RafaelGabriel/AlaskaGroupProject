﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Model;

namespace WebApi.Data
{
    public class DaoUsuario
    {
        public DaoUsuario()
        {
            //Aqui vai a instancia do banco de dados passada por Injeção de Dependência
        }

        public void Gravar(Usuario objeto)
        {
            if(objeto.id == 0)
            {
                //contexto.USUARIOS.add(objeto)
                //db.savechages();
            }
            else
            {
                //contexto.USUARIOS.Update(objeto)
                //db.savechages();
            }
        }

        internal void Gravar(Acompanhamentos objeto)
        {
            throw new NotImplementedException();
        }

        public List<Usuario> ListaTodosAtivos()
        {
            List<Usuario> lista = new List<Usuario>();
            lista.Add(new Usuario() { id = 1, ativo = true, login = "Fernando" });
            lista.Add(new Usuario() { id = 2, ativo = true, login = "Isabela" });
            lista.Add(new Usuario() { id = 3, ativo = true, login = "Gustavo", senha = "branch" });
            lista.Add(new Usuario() { id = 4, ativo = true, login = "Rafael" });

            return lista;
        }

        public List<Usuario> ListaTodos()
        {
            List<Usuario> lista = new List<Usuario>();
            lista.Add(new Usuario() { id = 1, ativo = true, login = "Fernando" });
            lista.Add(new Usuario() { id = 2, ativo = true, login = "Isabela" });
            lista.Add(new Usuario() { id = 3, ativo = true, login = "Gustavo" });
            lista.Add(new Usuario() { id = 4, ativo = true, login = "Rafael" });

            return lista;
        }

        public List<Usuario> Pesquisar(string texto)
        {
            return db.USUARIOS.Where(a => texto.Contains(a.id.ToString()) || a.nome.Contains(texto) || a.login.Contains(texto)).ToList();

        }

        public Usuario PesquisarId(long id)
        {
            return db.USUARIOS.Where(a => a.id == id).FirstOrDefault();
        }

        public Usuario PesquisarPorLoginSenha(string Login, string Senha)
        {
            return db.USUARIOS.Where(a => a.login == Login && a.senha == Senha).FirstOrDefault();
        }

        public static implicit operator DaoUsuario(DaoAcompanhamentos v)
        {
            throw new NotImplementedException();
        }
    }
}
