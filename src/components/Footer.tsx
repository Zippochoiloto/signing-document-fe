import Style from "./StylesComponents.module.css"

function Footer() {
    const Titles = [
        'Privacy policy',
        'Terms Of User',
        'Contact Us',
        'Copyright ⓒ 2020 Dedoco, Inc. All rights reserved'
    ]
    const listBlocks = Titles.map((el, i) => {
            return (
                <div className={Style.Block} key={i}>
                    {el}
                </div>
            )
        }
    )

    return (
        <div className={Style.FootContainer}>
            {listBlocks}
        </div>
    )
}

export default Footer
