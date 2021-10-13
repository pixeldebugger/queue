function Queue() {
    const items = [];

    return {
        enqueue,
        dequeue,
        front,
        isEmpty,
        size,
        queue
    };

    function enqueue(element) {
        items.push(element)
    }

    function dequeue() {
        return items.shift();
    }

    function front() {
        return items[0];
    }

    function isEmpty() {
        return items.length === 0;
    }

    function size() {
        return items.length;
    }

    function queue() {

        return [...items];
    }

}

const qe = Queue();

function add() {

    let array = JSON.parse(window.localStorage.getItem('array'));
    if (array) {
        if(array.length < 3) {
            if (!document.getElementById('ip').value) {
                alert("Input should not be empty");
            } else {
                qe.enqueue(document.getElementById('ip').value);
                document.getElementById('ip').value = '';

                window.localStorage.setItem('array', JSON.stringify(qe.queue()));
                console.log(qe.queue());
            }

        }
        else {
            alert("max length");
        }
    } else if(!array) {
        if (!document.getElementById('ip').value) {
            alert("Input should not be empty");
        } else {
            qe.enqueue(document.getElementById('ip').value);
            document.getElementById('ip').value = '';

            window.localStorage.setItem('array', JSON.stringify(qe.queue()));
            console.log(qe.queue());
        }
    }

}

function del() {
    qe.dequeue();
    window.localStorage.setItem('array', JSON.stringify(qe.queue()));
}

function display() {

    let array = JSON.parse(window.localStorage.getItem('array'));

    const h1 = document.createElement("h1");
    const text = document.createTextNode("current queue looks like: ");
    h1.appendChild(text);
    const element = document.getElementById("div1");
    element.appendChild(h1);


    for (let i = 0; i < array.length; i++) {

        const div = document.createElement("div");
        const node = document.createTextNode("position " + i + " " + ":" + " " + array[i]);
        div.appendChild(node);
        const element = document.getElementById("div1");

        element.appendChild(div);
    }

}

