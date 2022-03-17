const selectRule = {
    heading: 'Chọn chức năng',
    content: function(characters) {
        let htmlCharacters = characters.map( (character) => {
            return `
            <div class="item-rule">
                <div class="icon-rule">${character.icon}</div>
                <div class="name-rule">${character.nameVI}</div>
                <div class="count-rule">
                    ${character.nameUS == 'wolf' || character.nameUS == 'village' ? `
                        <button class="btn-count"><i class="fa-solid fa-chevron-left"></i></button>
                        <input type='text' class="inputCount" min="0" value="1" name="${character.nameUS}"/>
                        <button class="btn-count"><i class="fa-solid fa-chevron-right"></i></button>
                    ` : ''}
                </div>
                <div class="block-rule"><button class="btn-rule btn-selected"><i class="fa-solid fa-plus"></i></button></div>
            </div>
            `
        }).join('');


        return `
            <div class="list">
                <div class="header-list">
                    <h3 class="heading-content">Chức năng đã chọn (0)</h3>
                </div>
                <div class="body-list" id="list-selected">
                    
                </div>
            </div>

            <div class="list">
                <div class="header-list">
                    <h3 class="heading-content">các chức năng</h3>
                </div>
                <div class="body-list" id="list-select">
                    ${htmlCharacters}
                </div>
            </div>

            <div class="footer-content">
                <button class="btnAction" id="btnBack"><i class="fa-solid fa-angles-left"></i> Trở về</button>
                <button class="btnAction" id="btnSubmit" >Xác nhận</button>
            </div>
        `
    },
};

const home = {
    heading: 'Ma Sói',
    content: `
        <button class="btn-menu" id="btn-choose">Chọn Chức năng</button>
        <button class="btn-menu" id="btn-about">Giới thiệu</button>
    `,
}

const reviewSelected = {
    heading: 'Chuẩn Bị',

    blockItemSide: function(side,playGame) {
        return playGame.filterBySide(side).map( (character) => {
            return `
                <div class="item-side">
                    <div class="icon-rule">${character.rule.icon}</div>
                    <div class="name-rule">${character.rule.nameVI}</div>
                    <div class="number-rule">SL: ${playGame.countCharacter(character.rule.nameVI)}</div>
                </div>
            `
        }).join('');
    },

    content: function(playGame) {
        
        return `
            <div class="side">
            <div class="header-side">
                <h3 class="heading-side">phe người:</h3>
            </div>
            <div class="body-side">
                ${this.blockItemSide('human',playGame)}
            </div>
        </div>

        <div class="side">
            <div class="header-side">
                <h3 class="heading-side">phe sói:</h3>
            </div>
            <div class="body-side">
                ${this.blockItemSide('wolf',playGame)}
            </div>
        </div>

        <div class="footer-content">
            <button class="btnAction" id="btnBack"><i class="fa-solid fa-angles-left"></i> Trở về</button>
            <button class="btnAction" id="btnStart" >Bắt đầu</button>
        </div>
        `
    },
}

const view = {
    home: home,
    selectRule: selectRule,
    reviewSelected: reviewSelected,
}

export default view