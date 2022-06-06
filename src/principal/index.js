import {
    onGetCruds,
    saveCrud,
    deleteCrud,
    getCrud,
    updateCrud,
    getCruds
  } from "../crud/crud.js";

  const crudForm = document.getElementById("crud-form");
  const crudsContainer = document.getElementById("cruds-container");
  
  let editStatus = false;
  let id = "";
  
  window.addEventListener("DOMContentLoaded", async (e) => {
    // const querySnapshot = await getCruds();
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.data());
    // });
  
    onGetCruds((querySnapshot) => {
        crudsContainer.innerHTML = "";
  
        querySnapshot.forEach((doc) => {
        const crud = doc.data();
  
        crudsContainer.innerHTML += ` 
        <div class="card card-body mt-2 border-primary">
        <img src=${crud.image} alt='' />
      <h3 class="h5">${crud.title}</h3>
      <p>${crud.description}</p>
      <div>
        <button class="btn btn-primary btn-delete" data-id="${doc.id}">
          🗑 Delete
        </button>
        <button class="btn btn-secondary btn-edit" data-id="${doc.id}">
          🖉 Edit
        </button>
      </div>
    </div>`;
      });
  


      const btnsDelete = crudsContainer.querySelectorAll(".btn-delete");
      btnsDelete.forEach((btn) =>
        btn.addEventListener("click", async ({ target: { dataset } }) => {
          try {
            await deleteCrud(dataset.id);
          } catch (error) {
            console.log(error);
          }
        })
      );
  
      const btnsEdit = crudsContainer.querySelectorAll(".btn-edit");
      btnsEdit.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          try {
            const doc = await getCrud(e.target.dataset.id);
            const crud = doc.data();
            // crudForm["crud-image"].value = crud.image;
            crudForm["crud-title"].value = crud.title;
            crudForm["crud-description"].value = crud.description;
  
            editStatus = true;
            id = doc.id;
            crudForm["btn-crud-form"].innerText = "Update";
          } catch (error) {
            console.log(error);
          }
        });
      });
    });
  });
  
  crudForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const image = crudForm["crud-image"];
    const title = crudForm["crud-title"];
    const description = crudForm["crud-description"];
  
    try {
      if (!editStatus) {
        await saveCrud(image.value, title.value, description.value);
      } else {
        await  updateCrud(id, {
          image: image.value,
          title: title.value,
          description: description.value,
      });
  
        editStatus = false;
        id = "";
        taskForm["btn-crud-form"].innerText = "Save";
      }
  
      crudForm.reset();
      title.focus();
    } catch (error) {
      console.log(error);
    }
  });



