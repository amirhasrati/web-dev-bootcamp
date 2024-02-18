import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function EmojiClicker() {
    const [emojis, setEmojis] = useState([{ id: uuid(), emoji: "😭" }]);

    const addEmoji = () => {
        setEmojis((oldEmojis) => [...oldEmojis, { id: uuid(), emoji: "😊" }]);
    };

    const deleteEmoji = (id) => {
        setEmojis((prevEmojis) => {
            return prevEmojis.filter((e) => e.id !== id);
        });
    };

    const heartify = () => {
        setEmojis((prevEmojis) => {
            return prevEmojis.map((e) => {
                return {
                    ...e,
                    emoji: "❤️",
                };
            });
        });
    };

    return (
        <div>
            {emojis.map((e) => (
                <span
                    onClick={() => deleteEmoji(e.id)}
                    key={e.id}
                    style={{ fontsize: "4rem" }}>
                    {e.emoji}
                </span>
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
            <button onClick={heartify}>Make them all hearts</button>
        </div>
    );
}
