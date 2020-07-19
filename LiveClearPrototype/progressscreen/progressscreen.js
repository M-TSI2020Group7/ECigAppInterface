import { LitElement, html } from '@polymer/lit-element';
import { ProgressscreenStyle } from './progressscreen.style';

export class Progressscreen extends LitElement {
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
      ${ProgressscreenStyle}
    </style>
    <div data-layer="00c14ef6-142e-4e14-8ecf-33da884d307e" class="progressscreen">        <div data-layer="03142554-a7db-45c3-889b-777c89b3cc30" class="navbar">            <div data-layer="dd057fc3-66ad-4b2b-9f52-db32d5251f69" class="rectangle"></div>
            <div data-layer="a6b3658e-5495-4d9e-a2e1-8ece2b3895c0" class="navbarx5fmobilecopycc08d2dd">                <div data-layer="720d0dde-1802-49e6-9df7-b46b5ce9ad26" class="group279"></div>
</div>
            <svg data-layer="2061206d-2c78-4ad7-ab3e-3b7054922314" preserveAspectRatio="none" viewBox="-1.5 -1.5 19 19" class="navbarIconHome"><path d="M 8 0 C 12.41827774047852 0 16 3.581722259521484 16 8 C 16 12.41827774047852 12.41827774047852 16 8 16 C 3.581722259521484 16 0 12.41827774047852 0 8 C 0 3.581722259521484 3.581722259521484 0 8 0 Z"  /></svg>
            <div data-layer="2a77d81c-17e1-49e9-94a9-47dc9ddacfc6" class="navbarx5fmobilecopy9f21f802">                <div data-layer="a9eb5062-8613-416a-aa09-fc0a4ad7d8a0" class="group276"></div>
</div>
            <svg data-layer="b6d9aac6-faab-4893-aeb3-825626520b3f" preserveAspectRatio="none" viewBox="70.50635528564453 13.510687828063965 17.99359130859375 19.9805908203125" class="navbarIconBack"><path d="M 85.27194976806641 15.24735927581787 C 86.22632598876953 14.69563865661621 87 15.14092254638672 87 16.246337890625 L 87 30.75556182861328 C 87 31.8590030670166 86.22803497314453 32.30724716186523 85.27194976806641 31.75453948974609 L 72.7227783203125 24.49992752075195 C 71.76840209960938 23.94820785522461 71.76669311523438 23.05467796325684 72.7227783203125 22.50197219848633 L 85.27194976806641 15.24735927581787 Z"  /></svg>
            <div data-layer="4eaf7e43-2025-427e-8710-a9056d0ee1b7" class="navbarx5fmobilecopy">                <div data-layer="d6749f09-7634-4c71-918e-6172e5a66c5e" class="xmlid1"></div>
</div>
</div>
        <div data-layer="62b009e1-d193-4157-b090-475ea254e57c" class="group307">            <div data-layer="21faf024-9aac-4cbd-8274-0daaee95126c" class="group306">                <div data-layer="1b34346f-25e9-4c6d-a8e4-e7d87eb3a4ec" class="group301">                    <svg data-layer="a2e19504-55a8-43ec-9ead-f96ea4dd263c" preserveAspectRatio="none" viewBox="-0.75 -0.75 378.2999267578125 513.5" class="path86"><path d="M 0 0 L 376.7998962402344 0 L 376.7998962402344 512 L 0 512 L 0 0 Z"  /></svg>
                    <svg data-layer="3817f8a6-219d-4df0-aae0-250dadf81b0c" preserveAspectRatio="none" viewBox="0 0 376.7999267578125 80" class="path"><path d="M 376.7998962402344 0 L 0 0 L 0 80 L 376.7998962402344 80 L 376.7998962402344 0 Z"  /></svg>
                    <div data-layer="d690d812-eb98-474d-8aeb-773925ba73de" class="toolbar">                        <div data-layer="84d18cf1-9748-4ade-9680-258ed6827e50" class="background">                            <svg data-layer="355acaab-94a9-4015-abf5-3b577e758338" preserveAspectRatio="none" viewBox="0 0 376.7998962402344 56.0003662109375" class="path91"><path d="M 0 0 L 376.7998657226562 0 L 376.7998657226562 56.00037002563477 L 0 56.00037002563477 L 0 0 Z"  /></svg>
</div>
                        <div data-layer="39b2734e-d254-4a91-9ec9-3c19b9ae7ba6" class="content">                            <div data-layer="86e7d170-aa4e-4afc-9cc3-d550135562b2" class="progress">                                <div data-layer="ba88b7f5-6585-489a-8419-0e8560561375" class="group212">                                    <div data-layer="af63431a-4ae6-453e-9ba2-dc3ce4f75e07" class="xmlid6"></div>
                                    <div data-layer="44337662-7085-40e8-80a4-4da7450128be" class="recents">Progress</div>
                                    <div data-layer="410a094d-2862-40e1-a115-dc25ec41ad22" class="group211">                                        <svg data-layer="7dc78ef7-822c-4dd8-833f-3e6b5e21e052" preserveAspectRatio="none" viewBox="77.9000015258789 552.9000244140625 24 24" class="path66"><path d="M 77.90000152587891 552.9000244140625 L 101.9000015258789 552.9000244140625 L 101.9000015258789 576.9000244140625 L 77.90000152587891 576.9000244140625 L 77.90000152587891 552.9000244140625 Z"  /></svg>
                                        <svg data-layer="32d19bd0-3924-4cd9-8d03-e46f068642a6" preserveAspectRatio="none" viewBox="78.9000015258789 555.9000244140625 21.0999755859375 17.9000244140625" class="path67"><path d="M 90.90000152587891 555.9000244140625 C 85.90000152587891 555.9000244140625 81.90000152587891 559.9000244140625 81.90000152587891 564.9000244140625 L 78.90000152587891 564.9000244140625 L 82.80000305175781 568.800048828125 L 82.90000152587891 568.9000244140625 L 86.90000152587891 564.9000244140625 L 83.90000152587891 564.9000244140625 C 83.90000152587891 560.9000244140625 87 557.9000244140625 90.90000152587891 557.9000244140625 C 94.80000305175781 557.9000244140625 97.90000152587891 561 97.90000152587891 564.9000244140625 C 97.90000152587891 568.800048828125 94.80000305175781 571.9000244140625 90.90000152587891 571.9000244140625 C 89 571.9000244140625 87.20000457763672 571.1000366210938 86 569.800048828125 L 84.59999847412109 571.2000732421875 C 86.19999694824219 572.800048828125 88.5 573.800048828125 91 573.800048828125 C 96 573.800048828125 100 569.800048828125 100 564.800048828125 C 99.90000152587891 559.9000244140625 95.90000152587891 555.9000244140625 90.90000152587891 555.9000244140625 Z M 89.90000152587891 560.9000244140625 L 89.90000152587891 565.9000244140625 L 94.20000457763672 568.4000244140625 L 94.70000457763672 567.2000122070312 L 90.90000152587891 565.1000366210938 L 90.90000152587891 560.9000244140625 L 89.90000152587891 560.9000244140625 Z"  /></svg>
</div>
</div>
                                <div data-layer="07047b3c-fdca-4586-b5e4-e3683d5c1b74" class="rectangle133"></div>
</div>
                            <div data-layer="7c9506d7-9282-4c66-add7-59c187921d4c" class="trends">                                <div data-layer="7cd052ce-c1ab-42c4-a035-7df66916a4bd" class="group220">                                    <div data-layer="3b2f65dd-7fdb-445f-a063-c0a8fbd2d36f" class="xmlid2"></div>
                                    <div data-layer="fd0921c0-1dd6-47a4-aa23-b1078fae8d0d" class="favorites">Trends</div>
                                    <div data-layer="d1f3b9c5-d4e6-424d-9c96-a3f1c3e94dee" class="group219">                                        <svg data-layer="55ed4930-7d09-4d02-9d01-e89d8fe31384" preserveAspectRatio="none" viewBox="197.89999389648438 550.9000244140625 24 24" class="path70"><path d="M 197.8999938964844 550.9000244140625 L 221.8999938964844 550.9000244140625 L 221.8999938964844 574.9000244140625 L 197.8999938964844 574.9000244140625 L 197.8999938964844 550.9000244140625 Z"  /></svg>
                                        <svg data-layer="dd72cdc2-209c-4ca8-9dfd-692b79b62fdb" preserveAspectRatio="none" viewBox="200.3000030517578 553.9000244140625 20 18.2999267578125" class="path71"><path d="M 210.3000030517578 572.2000122070312 L 208.9000091552734 570.9000244140625 C 203.8000030517578 566.2000122070312 200.3000030517578 563.1000366210938 200.3000030517578 559.4000244140625 C 200.3000030517578 556.300048828125 202.6999969482422 553.9000244140625 205.8000030517578 553.9000244140625 C 207.5 553.9000244140625 209.1999969482422 554.7000122070312 210.3000030517578 556 C 211.4000091552734 554.7000122070312 213.1000061035156 553.9000244140625 214.8000030517578 553.9000244140625 C 217.9000091552734 553.9000244140625 220.3000030517578 556.300048828125 220.3000030517578 559.4000244140625 C 220.3000030517578 563.2000122070312 216.9000091552734 566.300048828125 211.6999969482422 570.9000244140625 L 210.3000030517578 572.2000122070312 Z"  /></svg>
</div>
</div>
                                <div data-layer="496af27e-bd11-44e5-bb2a-f78902c7224c" class="rectangle135"></div>
</div>
</div>
</div>
</div>
                <div data-layer="c5e79ee8-a5ba-4023-8883-75e5b5d46478" class="group296">                    <svg data-layer="b50df05d-5e41-47e7-9910-8ff0e028d443" preserveAspectRatio="none" viewBox="-0.75 134.25 181.29736328125 1.5" class="path85"><path d="M 179.79736328125 135 L 0 135 L 179.79736328125 135 Z"  /></svg>
                    <svg data-layer="9c2333fa-476d-4806-82e9-f12eb14a20d7" preserveAspectRatio="none" viewBox="0 0 346.7999267578125 189.7049560546875" class="path89"><path d="M 13.66181468963623 0 L 333.1380615234375 0 C 340.6832580566406 0 346.7998962402344 5.548439979553223 346.7998962402344 12.39278793334961 L 346.7998962402344 177.3122100830078 C 346.7998962402344 184.1565551757812 340.6832580566406 189.7049865722656 333.1380615234375 189.7049865722656 L 13.66181468963623 189.7049865722656 C 6.116601467132568 189.7049865722656 0 184.1565551757812 0 177.3122100830078 L 0 12.39278793334961 C 0 5.548439979553223 6.116601467132568 0 13.66181468963623 0 Z"  /></svg>
                    <div data-layer="39c92bcd-a9a2-42d5-8a55-2b4eac405f9e" class="group294">                        <svg data-layer="75c79504-737c-4f17-990b-3884c3289053" preserveAspectRatio="none" viewBox="-7.5 -7.5 171 174" class="ellipse34"><path d="M 75 0 C 116.4213562011719 0 150 33.57864761352539 150 75 C 150 116.4213562011719 116.4213562011719 150 75 150 C 33.57864761352539 150 0 116.4213562011719 0 75 C 0 33.57864761352539 33.57864761352539 0 75 0 Z"  /></svg>
                        <svg data-layer="2091ada8-46dc-413c-bb0f-55f21c8611cd" preserveAspectRatio="none" viewBox="-7.5 -6.5 175 176" class="blueGlow"><path d="M 75 1 C 116.4213562011719 1 150 33.79729843139648 150 75.49665069580078 C 150 117.1959991455078 116.4213562011719 151 75 151 C 33.57864761352539 151 0 117.1959991455078 0 75.49665069580078 C 0 33.79729843139648 33.57864761352539 1 75 1 Z"  /></svg>
                        <div data-layer="f7938a17-19d6-4b55-9162-a850adf6303f" class="x58uses">5/8<br />uses</div>
</div>
                    <div data-layer="e5f25828-69e7-4aae-b71c-4647e96ea508" class="subtitled0b03b61">It always seems <br />impossible until it’s <br />done.</div>
                    <div data-layer="6bd75a6d-4efa-4b48-9f93-4e78d642595d" class="title">Day 4</div>
</div>
                <div data-layer="35133b4e-2129-4d08-9e25-cdaa6c450aa5" class="group305">                    <svg data-layer="3fd06009-9b65-4f53-96e0-96702654211f" preserveAspectRatio="none" viewBox="0 0 346.7999267578125 188.80517578125" class="path90"><path d="M 13.66181468963623 0 L 333.1380615234375 0 C 340.6832580566406 0 346.7998962402344 5.522121906280518 346.7998962402344 12.33400344848633 L 346.7998962402344 176.4711303710938 C 346.7998962402344 183.2830200195312 340.6832580566406 188.8051452636719 333.1380615234375 188.8051452636719 L 13.66181468963623 188.8051452636719 C 6.116601467132568 188.8051452636719 0 183.2830200195312 0 176.4711303710938 L 0 12.33400344848633 C 0 5.522121906280518 6.116601467132568 0 13.66181468963623 0 Z"  /></svg>
                    <div data-layer="d37aa880-321a-4e14-8fb8-954d826cf919" class="chart">                        <div data-layer="8c25ccd1-4941-4a24-b22f-ca7befbcc494" class="x2da9f507">                            <div data-layer="3f9cc891-cd92-4357-9937-36795bd2b9ba" class="rectangle192"></div>
                            <div data-layer="e526bfed-c0cb-4acf-9d50-a5646591f47d" class="rectangle193"></div>
                            <div data-layer="b8aaf622-d899-4ed4-ba8d-10b26a3b9b1c" class="rectangle194"></div>
                            <div data-layer="97c17dcc-9a1c-4266-9845-82f8a876618d" class="rectangle195"></div>
                            <div data-layer="4f674b0c-f018-47f1-a1eb-9e3446202f64" class="rectangle196"></div>
                            <div data-layer="810a4310-3599-4e39-90d9-a941000a4eaa" class="rectangle197"></div>
                            <div data-layer="351be088-1022-49fe-b3cf-8f0c68981e33" class="rectangle198"></div>
</div>
</div>
                    <div data-layer="82d1ac0d-ae16-4acf-bf4b-bb928af6a2c4" class="xAxis">                        <div data-layer="46f853dd-e50f-4215-954b-20e3112ac049" class="sun">sun</div>
                        <div data-layer="816b4bbc-9088-4cb8-af70-e37266ea7ac1" class="mon">mon</div>
                        <div data-layer="7562b00b-f596-41a2-bb30-649bb50a6639" class="tues">tues</div>
                        <div data-layer="729d8154-6751-4ca5-903d-592c791af1ad" class="wed">wed</div>
                        <div data-layer="6fdef855-62e9-4f67-82e6-8ef02429d22a" class="thurs">thurs</div>
                        <div data-layer="0197b60e-fc8f-41f9-8818-bac48d454b6e" class="fri">fri</div>
                        <div data-layer="7340a737-92cf-4c5e-9062-0017af63c17b" class="sat">sat</div>
</div>
                    <div data-layer="53ecf772-efdd-4362-8afb-39c5bf5fa35f" class="subtitle">Looking Forward: Weekly Goal</div>
</div>
                <div data-layer="544e1c70-ec4c-48d4-96f9-6951b4e24cb7" class="pageTitle">Progress</div>
                <div data-layer="46a63ca4-98a0-4fce-ae6f-988dd0617e08" class="sysbardark">                    <div data-layer="a0a06504-382f-40f2-9a55-c8a6e8df7bd3" class="rectangle14759f16"></div>
                    <div data-layer="9070993b-8985-4082-9d36-9d5d9dfeb1f2" class="sysbaricons">                        <div data-layer="f19148de-f116-43b8-a444-cf1084c5ea62" class="sysbar"></div>
                        <div data-layer="6f880448-f448-4358-8347-efbcdd99d9af" class="group284">                            <div data-layer="e55223d2-ec89-4329-b8ed-25397409bd81" class="rectangle156"></div>
                            <div data-layer="9fde7ae1-cc25-4a8e-ba78-97e5d5a63ffb" class="x1230">12:30</div>
</div>
                        <div data-layer="d13c2070-fd8f-401c-ad87-8edcd517c97a" class="sysbarWifi">                            <div data-layer="9e83c0f6-dc47-4545-9185-34d97ccb23ce" class="group285">                                <svg data-layer="c1e8de5a-54bb-493c-a2dd-aec885204e84" preserveAspectRatio="none" viewBox="0 1 17.5999755859375 14" class="path78"><path d="M 8.800000190734863 15 L 17.60000038146973 4.100000381469727 C 17.29999923706055 3.799999952316284 13.89999961853027 1 8.800000190734863 1 C 3.700000762939453 1 0.300000011920929 3.799999952316284 0 4.099999904632568 L 8.800000190734863 15 L 8.800000190734863 15 L 8.800000190734863 15 L 8.800000190734863 15 L 8.800000190734863 15 Z"  /></svg>
</div>
                            <div data-layer="bd7d3161-5b21-490b-b6b5-59d69f0d1310" class="rectangle157"></div>
</div>
                        <div data-layer="faa7a2d0-eaf7-48de-9a60-4c3450c925c9" class="sysbarStatus">                            <svg data-layer="50481088-b314-4b17-8cab-35279e19748b" preserveAspectRatio="none" viewBox="19.799999237060547 1 14 14" class="path79"><path d="M 19.79999923706055 15 L 33.79999923706055 15 L 33.79999923706055 1 L 19.79999923706055 15 Z"  /></svg>
                            <div data-layer="af0fde96-3a9e-4867-a941-55a3f143fe8e" class="rectangle158"></div>
</div>
                        <div data-layer="b23da536-2394-4727-9850-cc19a1aa73dc" class="sysbarBattery">                            <div data-layer="231440b4-4325-4015-b589-d332f7c318aa" class="rectangle159"></div>
                            <svg data-layer="aa7506bd-1906-450c-84b4-350348a5a8f8" preserveAspectRatio="none" viewBox="42.79999923706055 1 9 14" class="path80"><path d="M 48.79999923706055 2 L 48.79999923706055 1 L 45.79999923706055 1 L 45.79999923706055 2 L 42.79999923706055 2 L 42.79999923706055 15 L 51.79999923706055 15 L 51.79999923706055 2 L 48.79999923706055 2 Z"  /></svg>
</div>
</div>
</div>
</div>
</div>
</div>

    `;
  }
}
customElements.define('progressscreen-element', Progressscreen);
