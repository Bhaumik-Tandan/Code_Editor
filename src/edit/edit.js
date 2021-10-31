import Language from "./language/language";
import LanguageHook from "./language/languageHook";
import Editors from "./editors/editors";

function Edit() {
    return (
        <LanguageHook className="App">
        <Language/>
        <Editors/>
      </LanguageHook>
    )
}

export default Edit;
