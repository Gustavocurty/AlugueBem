// SPDX-License-Identifier: MIT

pragma solidity ^0.8.25;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract YourContract is Ownable {
    using SafeMath for uint256;

    address payable public destinatarioPrincipal;
    address payable public destinatarioSecundario;
    uint256 immutable public valorAluguel = 1200;
    uint256 public saldoTotal;

    constructor(address payable _destinatarioPrincipal)  Ownable(msg.sender){
        destinatarioPrincipal = _destinatarioPrincipal;
        destinatarioSecundario = payable(0xeE46a2583e5AF325d682814642CECD8673C08480);
    }

    function efetuarPagamento() public payable {
        require(msg.value >= valorAluguel, "Valor do pagamento deve ser maior que zero");

        uint256 valorPrincipal = msg.value.mul(90).div(100); // 90% do valor
        uint256 valorSecundario = msg.value.mul(10).div(100); // 10% do valor

        destinatarioPrincipal.transfer(valorPrincipal);
        destinatarioSecundario.transfer(valorSecundario);
        saldoTotal = saldoTotal.add(msg.value);
        
    }

    function getSaldoTotal() public view returns (uint256) {
        return saldoTotal;
    }
}
