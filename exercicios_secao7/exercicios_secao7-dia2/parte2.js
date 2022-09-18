const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const cliente = order.name;
    const phoneN = order.phoneNumber;
    const streetName = order.address.street;
    const Snumber = order.address.number;
    const aptNumber = order.address.apartment;
    const fraseDoPedido = `Olá, ${deliveryPerson}, entrega para: ${cliente}, Telefone: ${phoneN},
    ${streetName}, Nº: ${Snumber}, AP: ${aptNumber}.`;
    console.log(fraseDoPedido);
  };
  
  // customerInfo(order);

  const orderModifier = (order) => {
    const novoNome = order.name = 'Luiz Silva';
    const pizzas = Object.keys(order.order.pizza);
    const drink = order.order.drinks.coke.type;
    const payment = order.payment.total = 50;
    const fraseNova = `Olá ${novoNome}, o total do seu pedido de ${pizzas} e ${drink} é R$ ${payment}.`
    console.log(fraseNova);
  };

    orderModifier(order);

//   Complete a função customerInfo() para que seu retorno seja similar a “Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701”.
//  Note que o parâmetro da função já está sendo passado na chamada da função.

// Complete a função orderModifier() para que seu retorno seja similar a “Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.”
// Modifique o nome da pessoa compradora.

// Modifique o valor total da compra para R$ 50,00.