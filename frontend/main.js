// $(document).ready(() => {
//     $(".search").submit(() => {
//         const keyword = $(".search").val();
//         $.get("localhost:5042?q="+keyword, function(data) {
//             const results = JSON.parse(data);
//             results.forEach(result => {
//                 document.createElement()

//             });
//         })
//     })
// })

const h = [{
    "abstract": "This book represents the most comprehensive treatment available of neural networks from an engineering perspective. Thorough, well-organized, and completely up to date, it examines all the important aspects of this emerging technology, including the learning \u2026",
    "author": "S Haykin",
    "pdf": "",
    "title": "Neural networks: a comprehensive foundation",
    "url": "https://dl.acm.org/citation.cfm?id=541500"
}, {
    "abstract": "",
    "author": "LV Fausett",
    "pdf": "",
    "title": "Fundamentals of neural networks: architectures, algorithms, and applications",
    "url": ""
}, {
    "abstract": "Course Description: In this course the students will be introduced to various neural network models and algorithms, adaptive behavior, associative learning, competitive dynamics and biological mechanisms. Several applications of artificial neural networks will be studied \u2026",
    "author": "SS Haykin and SS Haykin and SS Haykin and K Elektroingenieur\u2026",
    "pdf": "http://plaza.ufl.edu/angelbar/courses/CAP6615_SPRING2012.pdf",
    "title": "Neural networks and learning machines",
    "url": "http://plaza.ufl.edu/angelbar/courses/CAP6615_SPRING2012.pdf"
}, {
    "abstract": "",
    "author": "MT Hagan and HB Demuth and MH Beale and O De Jes\u00fas",
    "pdf": "",
    "title": "Neural network design",
    "url": ""
}, {
    "abstract": "We trained a large, deep convolutional neural network to classify the 1.3 million high-resolution images in the LSVRC-2010 ImageNet training set into the 1000 different classes. On the test data, we achieved top-1 and top-5 error rates of 39.7\\% and 18.9\\% which is \u2026",
    "author": "A Krizhevsky and I Sutskever and GE Hinton",
    "pdf": "http://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks.pdf",
    "title": "Imagenet classification with deep convolutional neural networks",
    "url": "http://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networ"
}, {
    "abstract": "High-dimensional data can be converted to low-dimensional codes by training a multilayer neural network with a small central layer to reconstruct high-dimensional input vectors. Gradient descent can be used for fine-tuning the weights in such \u201cautoencoder\u201d networks \u2026",
    "author": "GE Hinton and RR Salakhutdinov",
    "pdf": "https://pdfs.semanticscholar.org/7d76/b71b700846901ac4ac119403aa737a285e36.pdf",
    "title": "Reducing the dimensionality of data with neural networks",
    "url": "http://science.sciencemag.org/content/313/5786/504.short"
}, {
    "abstract": "A novel class of information-processing systems called cellular neural networks is proposed. Like neural networks, they are large-scale nonlinear analog circuits that process signals in real time. Like cellular automata, they consist of a massive aggregate of regularly spaced \u2026",
    "author": "LO Chua and L Yang",
    "pdf": "",
    "title": "Cellular neural networks: Theory",
    "url": "https://ieeexplore.ieee.org/abstract/document/7600/"
}, {
    "abstract": "This book provides the first comprehensive treatment of feed-forward neural networks from the perspective of statistical pattern recognition. After introducing the basic concepts of pattern recognition, the book describes techniques for modelling probability density \u2026",
    "author": "CM Bishop",
    "pdf": "http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.679.1104&rep=rep1&type=pdf",
    "title": "Neural networks for pattern recognition",
    "url": "https://books.google.com/books?hl=en&lr=&id=T0S0BgAAQBAJ&oi=fnd&pg=PP1&dq=neural+networks&ots=jM7ZqG6Bpm&sig=-5-nNK5CHqWT1zP3uKNfmuGhH0c"
}, {
    "abstract": "Deep Neural Networks (DNNs) are powerful models that have achieved excellent performance on difficult learning tasks. Although DNNs work well whenever large labeled training sets are available, they cannot be used to map sequences to sequences. In this \u2026",
    "author": "I Sutskever and O Vinyals and QV Le",
    "pdf": "http://papers.nips.cc/paper/5346-sequence-to-sequence-learning-with-neural-networks.pdf",
    "title": "Sequence to sequence learning with neural networks",
    "url": "http://papers.nips.cc/paper/5346-sequence-to-sequence-learning-with-neural-networks"
}, {
    "abstract": "Computational properties of use of biological organisms or to the construction of computers can emerge as collective properties of systems having a large number of simple equivalent components (or neurons). The physical meaning of content-addressable memory is \u2026",
    "author": "JJ Hopfield",
    "pdf": "https://www.pnas.org/content/pnas/79/8/2554.full.pdf",
    "title": "Neural networks and physical systems with emergent collective computational abilities",
    "url": "https://www.pnas.org/content/79/8/2554.abstract"
}];

var app = new Vue({
    el: '#app',
    data () {
        return {
            results: false,
            searching: false,
            query: ''
        }
    },
    methods: {
        processForm: function() {
          console.log({ query: this.query });
          this.searching = true;
          this.results = true;
          axios
            .get('http://127.0.0.1:5042?q='+this.query)
            .then(response => {
                console.log(response);
                this.searching = false;
                this.results = response.data;
                return response;
            })
        }
      }

});

