import { LitElement, html } from '@polymer/lit-element';
import { TrendsscreenStyle } from './trendsscreen.style';

export class Trendsscreen extends LitElement {
  static get properties(){
    return {
      
      
    };
  }

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
  }

  
  

  constructor(){
    super();

    
    
    
  }

  handleKeyPress(e) {
      if (e.key === 'Enter') {
        let name;
        let id;
        let index = -1;
        const value = e.target.value;
        if (e.target.name.search("::") > -1) {
            const varCount = e.target.name.split("::").length;
            if (varCount === 2) {
                name = e.target.name.split("::")[0];
                id = e.target.name.split("::")[1];
            } else if (varCount === 3) {
                name = e.target.name.split("::")[0];
                index = e.target.name.split("::")[1];
                id = e.target.name.split("::")[2];
            }
        } else {
            name = e.target.name;
        }
        this.dispatchEvent(new CustomEvent(`${name}:enter`, {
            bubbles: true,
            detail: {
                type: "textinput",
                name: name,
                value: value,
                index: index,
                id: id
          }
        }));
      }
      let name;
      let id;
      let index = -1;
      const value = e.key;
      if (e.target.name.search("::") > -1) {
          const varCount = e.target.name.split("::").length;
          if (varCount === 2) {
              name = e.target.name.split("::")[0];
              id = e.target.name.split("::")[1];
          } else if (varCount === 3) {
              name = e.target.name.split("::")[0];
              index = e.target.name.split("::")[1];
              id = e.target.name.split("::")[2];
          }
      } else {
          name = e.target.name;
      }
      this.dispatchEvent(new CustomEvent(`${name}:keypress`, {
          bubbles: true,
          detail: {
              type: "textinput",
              name: name,
              value: value,
              index: index,
              id: id
          }
      }));
  }

  handleChange(e) {
    let name;
    let id;
    let index = -1;
    const value = e.target.value;
    if (e.target.name.search("::") > -1) {
        const varCount = e.target.name.split("::").length;
        if (varCount === 2) {
            name = e.target.name.split("::")[0];
            id = e.target.name.split("::")[1];
        } else if (varCount === 3) {
            name = e.target.name.split("::")[0];
            index = e.target.name.split("::")[1];
            id = e.target.name.split("::")[2];
        }
    } else {
        name = e.target.name;
    }
    this.dispatchEvent(new CustomEvent(`${name}:change`, {
        bubbles: true,
        detail: {
            type: "textinput",
            name: name,
            value: value,
            index: index,
            id: id
        }
    }));
  }

  handleClick(target, owner, e) {
    let name;
    let id;
    let index = -1;
    if (target.search("::") > -1) {
        const varCount = target.split("::").length;
        if (varCount === 2) {
            name = target.split("::")[0];
            id = target.split("::")[1];
        } else if (varCount === 3) {
            name = target.split("::")[0];
            index = parseInt(target.split("::")[1]);
            id = target.split("::")[2];
            this[`${owner}SelectedIndex`] = index;
            this.requestUpdate();
        }
    } else {
        name = target;
    }
    this.dispatchEvent(new CustomEvent(`${name}:click`, {
        bubbles: true,
        detail: {
            type: "button",
            name: name,
            index: index,
            id: id
        }
    }));
  }

  handleMouseOver(target, owner, e) {
    let name;
    let id;
    let index = -1;
    if (target.search("::") > -1) {
        const varCount = target.split("::").length;
        if (varCount === 2) {
            name = target.split("::")[0];
            id = target.split("::")[1];
        } else if (varCount === 3) {
            name = target.split("::")[0];
            index = parseInt(target.split("::")[1]);
            id = target.split("::")[2];
        }
    } else {
        name = target;
    }
    this.dispatchEvent(new CustomEvent(`${name}:mouseover`, {
        bubbles: true,
        detail: {
            type: "button",
            name: name,
            index: index,
            id: id
        }
    }));
  }

  handleMouseOut(target, owner, e) {
    let name;
    let id;
    let index = -1;
    if (target.search("::") > -1) {
        const varCount = target.split("::").length;
        if (varCount === 2) {
            name = target.split("::")[0];
            id = target.split("::")[1];
        } else if (varCount === 3) {
            name = target.split("::")[0];
            index = parseInt(target.split("::")[1]);
            id = target.split("::")[2];
        }
    } else {
        name = target;
    }
    this.dispatchEvent(new CustomEvent(`${name}:mouseout`, {
        bubbles: true,
        detail: {
            type: "button",
            name: name,
            index: index,
            id: id
        }
    }));
  }

  handleChangeCheckbox(e) {
      let name;
      let id;
      let index = -1;
      const value = e.target.checked;
      if (e.target.name.search("::") > -1) {
          const varCount = e.target.name.split("::").length;
          if (varCount === 2) {
              name = e.target.name.split("::")[0];
              id = e.target.name.split("::")[1];
          } else if (varCount === 3) {
              name = e.target.name.split("::")[0];
              index = e.target.name.split("::")[1];
              id = e.target.name.split("::")[2];
          }
      } else {
          name = e.target.name;
      }
      this.dispatchEvent(new CustomEvent(`${name}:change`, {
          bubbles: true,
          detail: {
              type: "checkbox",
              name: name,
              value: value,
              index: index,
              id: id
          }
      }));
  }

  handleChangeRadio(e) {
      let name;
      let id;
      let index = -1;
      const value = e.target.checked;
      if (e.target.name.search("::") > -1) {
          const varCount = e.target.name.split("::").length;
          if (varCount === 2) {
              name = e.target.name.split("::")[0];
              id = e.target.name.split("::")[1];
          } else if (varCount === 3) {
              name = e.target.name.split("::")[0];
              index = e.target.name.split("::")[1];
              id = e.target.name.split("::")[2];
          }
      } else {
          name = e.target.name;
      }
      this.dispatchEvent(new CustomEvent(`${name}:change`, {
          bubbles: true,
          detail: {
              type: "radio",
              name: name,
              value: value,
              index: index,
              id: id
          }
      }));
  }

  handleChangeRadioGroup(e) {
      let name;
      let id;
      let index = -1;
      const value = e.target.value;
      if (e.target.name.search("::") > -1) {
          const varCount = e.target.name.split("::").length;
          if (varCount === 2) {
              name = e.target.name.split("::")[0];
              id = e.target.name.split("::")[1];
          } else if (varCount === 3) {
              name = e.target.name.split("::")[0];
              index = e.target.name.split("::")[1];
              id = e.target.name.split("::")[2];
          }
      } else {
          name = e.target.name;
      }
      // this.state[groupName] = value;
      this.dispatchEvent(new CustomEvent(`${name}:change`, {
          bubbles: true,
          detail: {
              type: "radiogroup",
              name: name,
              value: value,
              index: index,
              id: id
          }
      }));
  }

  handleChangeSelect(e) {
      let name;
      let id;
      const value = e.target.value;
      if (value !== "selectdefault") {
          if (e.target.id.search("::") > -1) {
              id = e.target.id.split("::")[1];
          }
          name = e.target.name;
          // this.state[groupName] = value;
          this.dispatchEvent(new CustomEvent(`${name}:change`, {
              bubbles: true,
              detail: {
                  type: "select",
                  name: name,
                  value: value,
                  id: id
              }
          }));
      }
  }

  render(){
    
    return html`
    <style>
      ${TrendsscreenStyle}
    </style>
    <div data-layer="6d7d0d12-06cd-43f4-bd78-48d49ada7c43" class="trendsscreen">        <div data-layer="2e10ad24-f0ae-4d09-a65c-9ef7ebaac83f" class="navbar">            <div data-layer="eb2acd79-5fc6-4813-a9ec-6fa6446c4e0b" class="rectangleab029e48"></div>
            <div data-layer="c86c32c2-7bc0-48b7-9444-4c5a707be2f9" class="navbarx5fmobilecopy28eca0cd">                <div data-layer="1367ff9c-ce74-4ed8-aefe-693b4758e9c4" class="group279"></div>
</div>
            <svg data-layer="640677e3-bab7-47b9-ba47-ab4653a92990" preserveAspectRatio="none" viewBox="-1.5 -1.5 19 19" class="navbarIconHome"><path d="M 8 0 C 12.41827774047852 0 16 3.581722259521484 16 8 C 16 12.41827774047852 12.41827774047852 16 8 16 C 3.581722259521484 16 0 12.41827774047852 0 8 C 0 3.581722259521484 3.581722259521484 0 8 0 Z"  /></svg>
            <div data-layer="c40550ae-f4ce-4233-b713-bee4ffd56440" class="navbarx5fmobilecopyaeac72b3">                <div data-layer="d20a8820-30ef-4487-bda7-3bd6ffecf2ff" class="group276"></div>
</div>
            <svg data-layer="423e9018-c35a-4c6f-b9d2-cde1da91585d" preserveAspectRatio="none" viewBox="70.50635528564453 13.510687828063965 17.99365234375 19.9805908203125" class="navbarIconBack"><path d="M 85.27194976806641 15.24735927581787 C 86.22632598876953 14.69563865661621 87 15.14092254638672 87 16.246337890625 L 87 30.75556182861328 C 87 31.8590030670166 86.22803497314453 32.30724716186523 85.27194976806641 31.75453948974609 L 72.7227783203125 24.49992752075195 C 71.76840209960938 23.94820785522461 71.76669311523438 23.05467796325684 72.7227783203125 22.50197219848633 L 85.27194976806641 15.24735927581787 Z"  /></svg>
            <div data-layer="db11c550-09bd-4d39-82b8-4b242df61004" class="navbarx5fmobilecopy">                <div data-layer="c24fcf30-f4c4-4e31-ab4b-2a0a3bef0fe0" class="xmlid1"></div>
</div>
</div>
        <div data-layer="498a0cda-b133-4e7f-8f1a-34ad5329964a" class="group304">            <div data-layer="65f8d986-905a-4c82-916c-6b23202978a6" class="group301">                <svg data-layer="efa48d6a-722f-47fa-ab30-74eb08a73e3f" preserveAspectRatio="none" viewBox="-0.75 -0.75 361.2999267578125 513.5" class="path86"><path d="M 0 0 L 359.7998962402344 0 L 359.7998962402344 512 L 0 512 L 0 0 Z"  /></svg>
                <svg data-layer="2b9003f3-492e-44e2-b757-4e08650be710" preserveAspectRatio="none" viewBox="0 0 359.7999267578125 80" class="path"><path d="M 359.7998962402344 0 L 0 0 L 0 80 L 359.7998962402344 80 L 359.7998962402344 0 Z"  /></svg>
                <div data-layer="dc06b8fe-e31d-44e6-9b13-20b2e6b373e3" class="toolbar">                    <div data-layer="a4802f3e-0e1d-403d-9ca6-d57702e3dc67" class="background">                        <svg data-layer="23c39a2f-7280-4703-a1d3-b37c472f5dac" preserveAspectRatio="none" viewBox="0 0 359.7999267578125 56.0003662109375" class="path91"><path d="M 0 0 L 359.7998962402344 0 L 359.7998962402344 56.00037002563477 L 0 56.00037002563477 L 0 0 Z"  /></svg>
</div>
                    <div data-layer="a1a65931-7604-4f16-8c04-54a987d8d5b6" class="content">                        <div data-layer="a3884fef-2f41-4f3c-9d25-e37137844214" class="progress">                            <div data-layer="77f39e4e-e86c-40a7-b2fb-1d6eaea1c04f" class="group212">                                <div data-layer="b46999ac-3399-4dc8-aaf6-1e1f36f0f95d" class="xmlid6"></div>
                                <div data-layer="3e83a030-d95f-41c0-9c55-979569ee19c1" class="recents">Progress</div>
                                <div data-layer="21c5de2d-c93f-428a-b04e-ccf297c37adf" class="group211">                                    <svg data-layer="6a5e2cea-4ad2-4682-99a6-027b6999760b" preserveAspectRatio="none" viewBox="77.9000015258789 552.9000244140625 24 24" class="path66"><path d="M 77.90000152587891 552.9000244140625 L 101.9000015258789 552.9000244140625 L 101.9000015258789 576.9000244140625 L 77.90000152587891 576.9000244140625 L 77.90000152587891 552.9000244140625 Z"  /></svg>
                                    <svg data-layer="561e7e42-25a3-4473-8e1a-6293daac2bff" preserveAspectRatio="none" viewBox="78.9000015258789 555.9000244140625 21.0999755859375 17.9000244140625" class="path67"><path d="M 90.90000152587891 555.9000244140625 C 85.90000152587891 555.9000244140625 81.90000152587891 559.9000244140625 81.90000152587891 564.9000244140625 L 78.90000152587891 564.9000244140625 L 82.80000305175781 568.800048828125 L 82.90000152587891 568.9000244140625 L 86.90000152587891 564.9000244140625 L 83.90000152587891 564.9000244140625 C 83.90000152587891 560.9000244140625 87 557.9000244140625 90.90000152587891 557.9000244140625 C 94.80000305175781 557.9000244140625 97.90000152587891 561 97.90000152587891 564.9000244140625 C 97.90000152587891 568.800048828125 94.80000305175781 571.9000244140625 90.90000152587891 571.9000244140625 C 89 571.9000244140625 87.20000457763672 571.1000366210938 86 569.800048828125 L 84.59999847412109 571.2000732421875 C 86.19999694824219 572.800048828125 88.5 573.800048828125 91 573.800048828125 C 96 573.800048828125 100 569.800048828125 100 564.800048828125 C 99.90000152587891 559.9000244140625 95.90000152587891 555.9000244140625 90.90000152587891 555.9000244140625 Z M 89.90000152587891 560.9000244140625 L 89.90000152587891 565.9000244140625 L 94.20000457763672 568.4000244140625 L 94.70000457763672 567.2000122070312 L 90.90000152587891 565.1000366210938 L 90.90000152587891 560.9000244140625 L 89.90000152587891 560.9000244140625 Z"  /></svg>
</div>
</div>
                            <div data-layer="bab92de1-f175-4a24-87bc-fdf0462f9d42" class="rectangle133"></div>
</div>
                        <div data-layer="7680d721-874d-49d7-a848-7df57ae74770" class="trends">                            <div data-layer="e42f6fcb-0ed8-44e0-82d0-70afcbdb7039" class="group220">                                <div data-layer="0c3191b1-3058-4eb3-8678-b1c20eaf9795" class="xmlid2"></div>
                                <div data-layer="2d25283b-1540-4a7c-909e-99298744d0b7" class="favorites">Trends</div>
                                <div data-layer="0f547a6e-f440-40c0-8d1c-bca4e9b114c8" class="group219">                                    <svg data-layer="fa4f76b2-2bf7-4b5b-b7e6-f37dd9b54cc7" preserveAspectRatio="none" viewBox="197.89999389648438 550.9000244140625 24 24" class="path70"><path d="M 197.8999938964844 550.9000244140625 L 221.8999938964844 550.9000244140625 L 221.8999938964844 574.9000244140625 L 197.8999938964844 574.9000244140625 L 197.8999938964844 550.9000244140625 Z"  /></svg>
                                    <svg data-layer="960c8a13-19e5-4287-b12f-384bd6582e25" preserveAspectRatio="none" viewBox="200.3000030517578 553.9000244140625 20 18.2999267578125" class="path71"><path d="M 210.3000030517578 572.2000122070312 L 208.9000091552734 570.9000244140625 C 203.8000030517578 566.2000122070312 200.3000030517578 563.1000366210938 200.3000030517578 559.4000244140625 C 200.3000030517578 556.300048828125 202.6999969482422 553.9000244140625 205.8000030517578 553.9000244140625 C 207.5 553.9000244140625 209.1999969482422 554.7000122070312 210.3000030517578 556 C 211.4000091552734 554.7000122070312 213.1000061035156 553.9000244140625 214.8000030517578 553.9000244140625 C 217.9000091552734 553.9000244140625 220.3000030517578 556.300048828125 220.3000030517578 559.4000244140625 C 220.3000030517578 563.2000122070312 216.9000091552734 566.300048828125 211.6999969482422 570.9000244140625 L 210.3000030517578 572.2000122070312 Z"  /></svg>
</div>
</div>
                            <div data-layer="ecd4da0d-97ea-43fa-86a4-2889b1eca57a" class="rectangle135"></div>
</div>
</div>
</div>
</div>
            <div data-layer="c7c74233-9f60-47af-9e47-ebad49111e4c" class="pageTitle">Trends</div>
            <div data-layer="7e9aaa8b-c0a8-4e4e-8474-4eae77a7651a" class="sysbardark">                <div data-layer="6b7f33a6-40f0-4e45-a132-bba92072b0b6" class="rectangle"></div>
                <div data-layer="027b7010-43d8-41de-b76f-7c0a81ecc1e6" class="sysbaricons">                    <div data-layer="f5a2f14a-33bb-47e7-b271-e7a66730133e" class="sysbar"></div>
                    <div data-layer="f5e2590f-5abc-41a0-ae31-d0fe5c816a50" class="group284">                        <div data-layer="21f8fb3b-d7e6-48bc-9091-8889441e4570" class="rectangle156"></div>
                        <div data-layer="f200d00b-f45a-49a0-9945-49c1127f84d5" class="x1230">12:30</div>
</div>
                    <div data-layer="9caf021b-ad1e-4239-baed-65d99753282a" class="sysbarWifi">                        <div data-layer="a2df582a-9389-41c2-a204-97455e0d5cbd" class="group285">                            <svg data-layer="94fd5a6b-8595-415b-afdf-28b2830dc523" preserveAspectRatio="none" viewBox="0 1 17.5999755859375 14" class="path78"><path d="M 8.800000190734863 15 L 17.60000038146973 4.100000381469727 C 17.29999923706055 3.799999952316284 13.89999961853027 1 8.800000190734863 1 C 3.700000762939453 1 0.300000011920929 3.799999952316284 0 4.099999904632568 L 8.800000190734863 15 L 8.800000190734863 15 L 8.800000190734863 15 L 8.800000190734863 15 L 8.800000190734863 15 Z"  /></svg>
</div>
                        <div data-layer="b687b49c-e0e1-4683-a73e-4faef1585c0a" class="rectangle157"></div>
</div>
                    <div data-layer="75901114-e7c7-49f2-acef-a633e9e63a5b" class="sysbarStatus">                        <svg data-layer="3507bb8d-3d7b-48b9-9652-334c9960965f" preserveAspectRatio="none" viewBox="19.799999237060547 1 14 14" class="path79"><path d="M 19.79999923706055 15 L 33.79999923706055 15 L 33.79999923706055 1 L 19.79999923706055 15 Z"  /></svg>
                        <div data-layer="86018a9a-7370-4413-86b8-109ba8052a85" class="rectangle158"></div>
</div>
                    <div data-layer="a6539715-19f6-4d1f-84e3-ba173e0520e0" class="sysbarBattery">                        <div data-layer="065cc3c5-f556-4563-b422-034799f769dd" class="rectangle159"></div>
                        <svg data-layer="e857bc9c-b840-47d4-9711-695c40b42611" preserveAspectRatio="none" viewBox="42.79999923706055 1 9 14" class="path80"><path d="M 48.79999923706055 2 L 48.79999923706055 1 L 45.79999923706055 1 L 45.79999923706055 2 L 42.79999923706055 2 L 42.79999923706055 15 L 51.79999923706055 15 L 51.79999923706055 2 L 48.79999923706055 2 Z"  /></svg>
</div>
</div>
</div>
            <div data-layer="3b04c68c-1135-4dfe-a54a-f48ae8c4ee21" class="group302">                <div data-layer="179fff33-8ee4-408d-a0df-43521cac5a6b" class="rectangle187"></div>
                <div data-layer="bcefb3bf-4f55-47bd-b367-b8812c5dba30" class="group290">                    <div data-layer="b0728949-ed9b-4085-af57-e21469d7a99a" class="chart1ca010b4">                        <div data-layer="16dab45a-e674-4ee6-8343-d4d6432d1ffd" class="x35b9dee0">                            <svg data-layer="1007c662-0516-454a-a55e-dd93d5c21445" preserveAspectRatio="none" viewBox="-1.5 -1.5 282.63818359375 138.79168701171875" class="path84"><path d="M 0 96.87577056884766 L 46.60635757446289 38.91590881347656 L 93.21271514892578 96.87577056884766 L 139.8190765380859 135.7916870117188 L 186.4254302978516 0 L 233.0317993164062 57.95986557006836 L 279.6381530761719 77.83181762695312"  /></svg>
                            <div data-layer="6d66a143-bb75-436f-a686-b5da428f00db" class="marks75846ef9">                                <svg data-layer="5d044651-2a6c-4bdf-86b0-e4258e5f13ca" preserveAspectRatio="none" viewBox="-1.5 -1.5 13 13" class="ellipse26"><path d="M 5 0 C 7.76142406463623 0 10 2.238576173782349 10 5 C 10 7.76142406463623 7.76142406463623 10 5 10 C 2.238576173782349 10 0 7.76142406463623 0 5 C 0 2.238576173782349 2.238576173782349 0 5 0 Z"  /></svg>
                                <svg data-layer="8355f182-0603-4174-b7d4-1460b64a4b69" preserveAspectRatio="none" viewBox="-1.5 -1.5 13 13" class="ellipse27"><path d="M 5 0 C 7.76142406463623 0 10 2.238576173782349 10 5 C 10 7.76142406463623 7.76142406463623 10 5 10 C 2.238576173782349 10 0 7.76142406463623 0 5 C 0 2.238576173782349 2.238576173782349 0 5 0 Z"  /></svg>
                                <svg data-layer="fbfd57e9-1add-4f03-afb4-c8fc41798730" preserveAspectRatio="none" viewBox="-1.5 -1.5 13 13" class="ellipse28"><path d="M 5 0 C 7.76142406463623 0 10 2.238576173782349 10 5 C 10 7.76142406463623 7.76142406463623 10 5 10 C 2.238576173782349 10 0 7.76142406463623 0 5 C 0 2.238576173782349 2.238576173782349 0 5 0 Z"  /></svg>
                                <svg data-layer="f37edce7-3171-454a-83b3-773e0666d46b" preserveAspectRatio="none" viewBox="-1.5 -1.5 13 13" class="ellipse29"><path d="M 5 0 C 7.76142406463623 0 10 2.238576173782349 10 5 C 10 7.76142406463623 7.76142406463623 10 5 10 C 2.238576173782349 10 0 7.76142406463623 0 5 C 0 2.238576173782349 2.238576173782349 0 5 0 Z"  /></svg>
                                <svg data-layer="dc4eb2e4-2673-45c0-8f79-018cd5872d5a" preserveAspectRatio="none" viewBox="-1.5 -1.5 13 13" class="ellipse30"><path d="M 5 0 C 7.76142406463623 0 10 2.238576173782349 10 5 C 10 7.76142406463623 7.76142406463623 10 5 10 C 2.238576173782349 10 0 7.76142406463623 0 5 C 0 2.238576173782349 2.238576173782349 0 5 0 Z"  /></svg>
                                <svg data-layer="abd42f3c-6939-43ec-a644-a6d82aaf2ee0" preserveAspectRatio="none" viewBox="-1.5 -1.5 13 13" class="ellipse31"><path d="M 5 0 C 7.76142406463623 0 10 2.238576173782349 10 5 C 10 7.76142406463623 7.76142406463623 10 5 10 C 2.238576173782349 10 0 7.76142406463623 0 5 C 0 2.238576173782349 2.238576173782349 0 5 0 Z"  /></svg>
                                <svg data-layer="6395ed07-72f3-45c9-906a-b8166da03e98" preserveAspectRatio="none" viewBox="-1.5 -1.5 13 13" class="ellipse32"><path d="M 5 0 C 7.76142406463623 0 10 2.238576173782349 10 5 C 10 7.76142406463623 7.76142406463623 10 5 10 C 2.238576173782349 10 0 7.76142406463623 0 5 C 0 2.238576173782349 2.238576173782349 0 5 0 Z"  /></svg>
</div>
</div>
</div>
                    <div data-layer="cf66c29b-ec90-4818-ba76-f7e3cde32a85" class="xAxisLine4b2a78eb">                        <svg data-layer="d6fb63a5-41ca-4f11-a32e-a7b012f6abd6" preserveAspectRatio="none" viewBox="0 -0.5 304 1" class="line3"><path d="M 0 0 L 304 0"  /></svg>
</div>
                    <div data-layer="be262406-2a40-4172-9377-f7f97a9cbd61" class="sun">Sun</div>
                    <div data-layer="562385cf-fcee-48fd-98c4-d5685d65c97d" class="mon">Mon</div>
                    <div data-layer="ca043585-b2b9-4b65-b72c-2984de51a87c" class="tue">Tue</div>
                    <div data-layer="f4a28ad6-a27a-41eb-9696-a7fca68b2a3b" class="wed">Wed</div>
                    <div data-layer="d9d1b600-027c-4d64-812e-5e5d5dce0d25" class="thu">Thu</div>
                    <div data-layer="35df818d-41dc-4cbf-8162-b1ef494cb22b" class="fri">Fri</div>
                    <div data-layer="52714318-20be-4301-8b2f-fffe34f8582e" class="title">This Week</div>
                    <div data-layer="2ca40780-53e6-487b-baa1-0d9a120187f5" class="sat">Sat</div>
</div>
</div>
            <div data-layer="60215938-45eb-4306-8b3f-9e998c8b569c" class="group303">                <div data-layer="a032a7b7-9033-49a0-b8bc-75f5fd8c9d2a" class="group298">                    <div data-layer="9b5e7674-803f-4da9-ae75-bee07094ee1b" class="rectangle199"></div>
                    <div data-layer="fe671ba7-bdff-426e-a3de-d1cc1a94d5cd" class="chart">                        <div data-layer="ef95c833-1085-415f-a0e7-31ffda43d8a1" class="x21eea23a">                            <svg data-layer="83461e2d-86d0-4bf2-a927-85a261e0340d" preserveAspectRatio="none" viewBox="-1.5 -1.5 292.7998046875 52" class="path92"><path d="M 0 34 L 96.59996795654297 0 L 193.1999359130859 39 L 289.7998657226562 49"  /></svg>
                            <div data-layer="3d244104-d897-474c-b6ed-b64b449eaf85" class="marks">                                <svg data-layer="84e7ab88-736b-4d6b-82c6-0760f60ac2b8" preserveAspectRatio="none" viewBox="-1.5 -1.5 13 13" class="ellipse35"><path d="M 5 0 C 7.76142406463623 0 10 2.238576173782349 10 5 C 10 7.76142406463623 7.76142406463623 10 5 10 C 2.238576173782349 10 0 7.76142406463623 0 5 C 0 2.238576173782349 2.238576173782349 0 5 0 Z"  /></svg>
                                <svg data-layer="a6f8cc93-fd88-4689-ab7e-5d7ec1817be4" preserveAspectRatio="none" viewBox="-1.5 -1.5 13 13" class="ellipse36"><path d="M 5 0 C 7.76142406463623 0 10 2.238576173782349 10 5 C 10 7.76142406463623 7.76142406463623 10 5 10 C 2.238576173782349 10 0 7.76142406463623 0 5 C 0 2.238576173782349 2.238576173782349 0 5 0 Z"  /></svg>
                                <svg data-layer="78359228-d0e0-4270-8310-6609958d54c1" preserveAspectRatio="none" viewBox="-1.5 -1.5 13 13" class="ellipse37"><path d="M 5 0 C 7.76142406463623 0 10 2.238576173782349 10 5 C 10 7.76142406463623 7.76142406463623 10 5 10 C 2.238576173782349 10 0 7.76142406463623 0 5 C 0 2.238576173782349 2.238576173782349 0 5 0 Z"  /></svg>
                                <svg data-layer="61d5427b-2427-48e9-820f-131ca522dfa3" preserveAspectRatio="none" viewBox="-1.5 -1.5 13 13" class="ellipse38"><path d="M 5 0 C 7.76142406463623 0 10 2.238576173782349 10 5 C 10 7.76142406463623 7.76142406463623 10 5 10 C 2.238576173782349 10 0 7.76142406463623 0 5 C 0 2.238576173782349 2.238576173782349 0 5 0 Z"  /></svg>
</div>
</div>
</div>
                    <div data-layer="0b712799-5ea1-4c74-a79f-6517cccc8e06" class="xAxisLine">                        <svg data-layer="431f3d9a-eaa8-4156-81ef-ba8121433fe4" preserveAspectRatio="none" viewBox="0 -0.5 300 1" class="line4"><path d="M 0 0 L 300 0"  /></svg>
</div>
                    <div data-layer="a8c9f56b-385a-4943-a3bb-7015fbdaa1ef" class="xAxis">                        <div data-layer="3e3fc18e-3c43-40fd-828e-97d5bea537e0" class="week1">week 1</div>
                        <div data-layer="ec42161d-c0d3-4ecc-bdac-e9f0f44374f5" class="week2">week 2</div>
                        <div data-layer="c98423ff-88f9-4905-a57e-ed67f69e0263" class="week3">week 3</div>
                        <div data-layer="ca75afdd-a498-4aa6-b1cc-87b7eaaa4c9f" class="week4">week 4</div>
</div>
</div>
                <div data-layer="4e86faa8-4180-4a87-b9c2-e54d7d156765" class="subtitle">This Month</div>
</div>
</div>
</div>

    `;
  }
}
customElements.define('trendsscreen-element', Trendsscreen);
