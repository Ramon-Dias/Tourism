export class ListTourism {
    constructor() {
        this.list = [
            {
                image: 'pao-de-acucar.png',
                title: 'Pão de Açúcar',
                description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor dosa amet sint. Velit officia consece duis enim velit mollit.'
            },
            {
                image: 'cristo-redentor.png',
                title: 'Cristo Redentor',
                description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor dosa amet sint. Velit officia consece duis enim velit mollit.'
            },
            {
                image: 'ilhas-grandes.png',
                title: 'Ilhas Grandes',
                description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor dosa amet sint. Velit officia consece duis enim velit mollit.'
            },
            {
                image: 'centro-historico-de-paraty.png',
                title: 'Centro Histórico de Paraty',
                description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor dosa amet sint. Velit officia consece duis enim velit mollit.'
            },
        ]


        this.selectrors();
        this.events();
    }

        selectrors() {
            this.form = document.querySelector('.form-all');
            this.inputImage = document.querySelector('.input-image')
            this.pictureImage = document.querySelector('.picture-image')
            this.pictureText = document.querySelector('.picture');
            this.inputTitle = document.querySelector('.input-title');
            this.inputDescription = document.querySelector('.input-description');
            this.container = document.querySelector('.container-item-list');

    }

    events() {

    this.renderList();
    this.inputImage.addEventListener('change', this.selectImage.bind(this))
    this.form.addEventListener('submit', this.addItemToList.bind(this))
    if(window.innerWidth > 1024) {
     this.createSlick();
    }

    }

    selectImage(event) {
        const inputTarget = event.target;
        const file = inputTarget.files[0]

        if (file) {
            const reader = new FileReader();
            reader.addEventListener('load', (e) => {
                const readerTarget = e.target;

                const img = document.createElement('img');
                img.src = readerTarget.result;
                img.classList.add('picture-image')

                document.querySelector('.picture-image').innerHTML = '' ;


                document.querySelector('.picture-image').appendChild(img);
            })

            reader.readAsDataURL(file);

        } else {
            this.pictureText = 'Imagem'
            this.pictureImage.innerHTML = pictureText
        }

    };

    addItemToList(event) {
        event.preventDefault();

        const itemImage = this.pictureImage.children[0].src
        const itemTitle = event.target['item-title'].value
        const itemDescription = event.target['item-description'].value


        if (itemTitle != '' && itemDescription != '' && itemImage != '') {

        const item = {
            image: itemImage,
            title: itemTitle,
            description: itemDescription

        }

        this.list.push(item);

        if (window.innerWidth > 1024) {
            this.removeSlick();
        }

        this.renderList();
        if(window.innerWidth > 1024) {
            this.createSlick();
        }
        this.resetInputs();

        }

    }

    renderList() {
      let containerStructure = "";

      this.list.forEach((item) => {
        containerStructure += `
        <li class="item-list" data-test="item-list">
        <img class="item-img" src="${item.image}" data-test="image-item-list"/>
        <h3 data-test="title-item-list">${item.title}</h3>
        <p data-test="description-item-list">
            ${item.description}
        </p>
        </li>
        `;
      });


      this.container.innerHTML = containerStructure;


    }

    resetInputs() {
        this.pictureImage.innerHTML = "Imagem";
        this.inputTitle.value = "";
        this.inputDescription.value = "";
    }



    createSlick() {
        // if(window.innerWidth > 1024) {
            $(".container-item-list").slick({
                dots: true,
                arrows: true,
                infinite: false,
                slidesToShow: 4,
                slidesToScroll: 1,
            //     responsive: [{
            //         breakpoint: 1025,
            //         settings: "unslick"
            // }],

    })

        // }
}


    removeSlick() {
        // if(window.innerWidth > 1024) {
            $(".container-item-list").slick("unslick")

        // }
    }


}
