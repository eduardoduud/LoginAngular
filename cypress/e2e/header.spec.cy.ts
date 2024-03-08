import {ModalPage} from "../page-objects/modal.page";
import {HomePage} from "../page-objects/home.page";

describe('Header tests', () =>{
  const modalPage = new ModalPage();
  const home = new HomePage();

  it('Example test, edit it later', () => {
    home.visit();
  });
});
