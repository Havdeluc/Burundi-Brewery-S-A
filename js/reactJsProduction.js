import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// const systemBaseUrl = 'http://192.168.43.114:8000/brewery/api';
const systemBaseUrl = "https://backend.burundibrewery.com/brewery/api";

async function postData(url = "", data = {}) {
  return await fetch(`${systemBaseUrl}/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .catch((e) => {
      console.log(e);
      return {};
    });
}

async function fetchData(url = "") {
  return {}; // return await fetch(`${systemBaseUrl}/${url}`, {
  //      method: 'GET',
  //     headers: {
  //         'Content-Type': 'application/json',
  //     }
  // }).then(response => response.json()).catch((e) => {
  //     console.log(e);
  //     return {};
  //  });
}

async function postDataWithFiles({ url = "", data = new FormData() }) {
  return await fetch(`${systemBaseUrl}/${url}`, {
    method: "POST",
    headers: {
      // 'Content-Type': 'multipart/form-data',
    },
    body: data
  })
    .then((response) => response.json())
    .catch((e) => {
      console.log(e);
      return {};
    });
}

function SubscribeToNewsLetter() {
  const [email, setEmail] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);
  const [errorMessage, setError] = React.useState("");
  const [successMessage, setSuccess] = React.useState("");
  const formRef = React.useRef();

  function sendMail() {
    setSuccess("");
    setError("");

    if (email.length) {
      setLoading(true);
      postData("blog/subscribe-newsletter", {
        Email: email
      }).then((response) => {
        setLoading(false);

        if (response.id && response.email) {
          setSuccess("Votre e-mail a été enregistré avec succès");
          formRef.current.reset();
        } else {
          console.log("Failure", response);
          setError(
            "Une erreur s'est produite, soit l'e-mail existe déjà dans notre liste de diffusion, soit vérifiez votre connexion Internet."
          );
        }
      });
    } else {
      setError("Tout les champs sont obligatoires.");
    }
  }

  return /*#__PURE__*/ _jsxs(_Fragment, {
    children: [
      /*#__PURE__*/ _jsx("p", {
        children: "Abonnez-vous \xE0 notre newsletter"
      }),
      /*#__PURE__*/ _jsxs("div", {
        className: "flex-row column-gap-middle text-close",
        children: [
          errorMessage.length
            ? /*#__PURE__*/ _jsx("p", {
                className: "p-error",
                children: errorMessage
              })
            : /*#__PURE__*/ _jsx(_Fragment, {}),
          successMessage.length
            ? /*#__PURE__*/ _jsx("p", {
                className: "p-success",
                children: successMessage
              })
            : /*#__PURE__*/ _jsx(_Fragment, {}),
          errorMessage.length || successMessage.length
            ? /*#__PURE__*/ _jsx("p", {
                className: "close",
                onClick: (event) => {
                  event.stopPropagation();
                  setSuccess("");
                  setError("");
                },
                children: "Fermer"
              })
            : /*#__PURE__*/ _jsx(_Fragment, {})
        ]
      }),
      /*#__PURE__*/ _jsxs("form", {
        ref: formRef,
        className: "form-row-s-button",
        onChange: (event) => {
          event.stopPropagation();
          setEmail(event.target.value);
        },
        onSubmit: (event) => {
          event.preventDefault();
          sendMail();
        },
        children: [
          /*#__PURE__*/ _jsx("input", {
            required: true,
            type: "email",
            placeholder: "Votre adresse e-mail",
            name: "Email"
          }),
          /*#__PURE__*/ _jsx("button", {
            className: "comments_articles_input_button",
            type: "submit",
            children: isLoading
              ? /*#__PURE__*/ _jsx("i", {
                  className: "fa fa-spinner fa-spin"
                })
              : /*#__PURE__*/ _jsx("i", {
                  className: "fa fa-paper-plane"
                })
          })
        ]
      })
    ]
  });
}

function Gallery({ events = [] }) {
  const [catIndex, setCatIndex] = React.useState(0);

  function handleSlideGaller(isNext) {
    const sliderGap = 300;

    if (!isNext) {
      document.getElementById("caroussel002_items_gallery").scrollLeft +=
        sliderGap;
    } else {
      document.getElementById("caroussel002_items_gallery").scrollLeft -=
        sliderGap;
    }
  }

  const currentEvent = events[catIndex];
  return events.length
    ? /*#__PURE__*/ _jsxs("div", {
        className: "duo",
        children: [
          /*#__PURE__*/ _jsxs("div", {
            className: "duo-left duo-yellow",
            children: [
              /*#__PURE__*/ _jsx("p", {
                className: "rounded-card-p",
                children: "Media"
              }),
              /*#__PURE__*/ _jsx("h1", {
                className: "large-title",
                children: "Notre galerie"
              }),
              /*#__PURE__*/ _jsx("p", {
                className: "p-medium",
                children:
                  "Burundi Brewery est la premi\xE8re brasserie cr\xE9\xE9e par des Burundais depuis que le Burundi existe. L\u2019entreprise Burundi Brewery produit de l\u2019eau min\xE9rale des boissons \xE0 base de banane et des jus de fruits."
              })
            ]
          }),
          /*#__PURE__*/ _jsxs("div", {
            className: "duo-right gallery-holder",
            children: [
              /*#__PURE__*/ _jsxs("div", {
                id: "caroussel002_items_gallery",
                className: "caroussel002_items",
                children: [
                  /*#__PURE__*/ _jsx("div", {
                    className:
                      "caroussel002_items_icons caroussel002_items_icons_left",
                    onClick: (e) => {
                      e.stopPropagation();
                      handleSlideGaller(true);
                    },
                    children: /*#__PURE__*/ _jsx("i", {
                      className: "fa fa-arrow-left"
                    })
                  }),
                  events.map((e, i) => {
                    return /*#__PURE__*/ _jsx(
                      "p",
                      {
                        className: "categories_displayer_category",
                        id:
                          catIndex === i
                            ? "categories_displayer_category_selected"
                            : "",
                        value: e.id,
                        onClick: (event) => {
                          event.stopPropagation();
                          setCatIndex(i);
                        },
                        children: e.title
                      },
                      e.id
                    );
                  }),
                  /*#__PURE__*/ _jsx("div", {
                    className:
                      "caroussel002_items_icons caroussel002_items_icons_right",
                    onClick: (e) => {
                      e.stopPropagation();
                      handleSlideGaller(false);
                    },
                    children: /*#__PURE__*/ _jsx("i", {
                      className: "fa fa-arrow-right"
                    })
                  })
                ]
              }),
              /*#__PURE__*/ _jsx("div", {
                className: "gallery-image-space",
                children: /*#__PURE__*/ _jsx(GalleryImagesDisplayer, {
                  images:
                    currentEvent === null || currentEvent === void 0
                      ? void 0
                      : currentEvent.image
                })
              })
            ]
          })
        ]
      })
    : /*#__PURE__*/ _jsx(_Fragment, {});
}

function ImagesDisplayer({ images = [] }) {
  const [currentImage, setCurrentImage] = React.useState(0);

  function handleActions({ isNext = true }) {
    if (!isNext && currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }

    if (isNext && currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    }
  }

  return images.length
    ? /*#__PURE__*/ _jsxs(
        "div",
        {
          className: "slide-show-slides",
          children: [
            /*#__PURE__*/ _jsx("a", {
              className: "prev",
              onClick: (event) => {
                event.stopPropagation();
                handleActions({
                  isNext: false
                });
              },
              children: "\u276E"
            }),
            /*#__PURE__*/ _jsx("a", {
              className: "next",
              onClick: (event) => {
                event.stopPropagation();
                handleActions({
                  isNext: true
                });
              },
              children: "\u276F"
            }),
            /*#__PURE__*/ _jsx("img", {
              className: "image-slide",
              src: images[currentImage],
              alt: ""
            })
          ]
        },
        Math.random()
      )
    : /*#__PURE__*/ _jsx("p", {
        className: "p-centered",
        children: "Aucune image disponible"
      });
}

function GalleryImagesDisplayer({ images = [] }) {
  console.log(images);
  const [currentImage, setCurrentImage] = React.useState(0);

  function handleActions({ isNext = true }) {
    if (!isNext && currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }

    if (isNext && currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    }
  }

  return images.length
    ? /*#__PURE__*/ _jsxs(
        "div",
        {
          className: "slide-show-slides",
          children: [
            /*#__PURE__*/ _jsx("a", {
              className: "prev",
              onClick: (event) => {
                event.stopPropagation();
                handleActions({
                  isNext: false
                });
              },
              children: "\u276E"
            }),
            /*#__PURE__*/ _jsx("a", {
              className: "next",
              onClick: (event) => {
                event.stopPropagation();
                handleActions({
                  isNext: true
                });
              },
              children: "\u276F"
            }),
            /*#__PURE__*/ _jsx("img", {
              className: "image-slide",
              src: images[currentImage].link,
              alt: images[currentImage].description
            }),
            /*#__PURE__*/ _jsxs("div", {
              className: "single-image-description",
              children: [
                /*#__PURE__*/ _jsx("p", {
                  children: images[currentImage].description
                }),
                /*#__PURE__*/ _jsxs("div", {
                  className: "social-media",
                  children: [
                    /*#__PURE__*/ _jsx("a", {
                      target: "_blank",
                      href: images[currentImage].facebook,
                      children: /*#__PURE__*/ _jsx("i", {
                        className: "fa-brands fa-facebook"
                      })
                    }),
                    /*#__PURE__*/ _jsx("a", {
                      target: "_blank",
                      href: images[currentImage].twitter,
                      children: /*#__PURE__*/ _jsx("i", {
                        className: "fa-brands fa-twitter"
                      })
                    }),
                    /*#__PURE__*/ _jsx("a", {
                      target: "_blank",
                      href: images[currentImage].instagram,
                      children: /*#__PURE__*/ _jsx("i", {
                        className: "fa-brands fa-instagram"
                      })
                    }),
                    /*#__PURE__*/ _jsx("a", {
                      target: "_blank",
                      href: images[currentImage].youtube,
                      children: /*#__PURE__*/ _jsx("i", {
                        className: "fa-brands fa-youtube"
                      })
                    })
                  ]
                })
              ]
            })
          ]
        },
        Math.random()
      )
    : /*#__PURE__*/ _jsx("p", {
        className: "p-centered",
        children: "Aucune image disponible"
      });
}

function ContactUsForm() {
  const [form, setForm] = React.useState({});
  const [isAsync, setAsync] = React.useState(false);
  const [errorMessage, setError] = React.useState("");
  const [successMessage, setSuccess] = React.useState("");
  const formRef = React.useRef();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm(
      _objectSpread(
        _objectSpread({}, form),
        {},
        {
          [name]: value
        }
      )
    );
  };

  const handleSubmit = (event) => {
    var _form$Email, _form$Name, _form$Message;

    event.preventDefault();
    setSuccess("");
    setError("");
    console.log(form);

    if (
      (form === null || form === void 0
        ? void 0
        : (_form$Email = form.Email) === null || _form$Email === void 0
        ? void 0
        : _form$Email.length) &&
      (form === null || form === void 0
        ? void 0
        : (_form$Name = form.Name) === null || _form$Name === void 0
        ? void 0
        : _form$Name.length) &&
      (form === null || form === void 0
        ? void 0
        : (_form$Message = form.Message) === null || _form$Message === void 0
        ? void 0
        : _form$Message.length)
    ) {
      setAsync(true);
      postData("blog/contactus", form).then((response) => {
        setAsync(false);

        if (response.task) {
          setSuccess("Votre message a été envoyé avec succès");
          formRef.current.reset();
          setForm({});
        } else {
          console.log("Failure", response);
          setError(
            "Une erreur s'est produite, vérifiez votre connexion Internet, puis réessayez."
          );
        }
      });
    } else {
      setError("Tout les champs sont obligatoires.");
    }
  };

  return /*#__PURE__*/ _jsxs("form", {
    ref: formRef,
    className: "contact-form",
    onChange: handleChange,
    onSubmit: handleSubmit,
    children: [
      /*#__PURE__*/ _jsxs("div", {
        className: "input-labeled",
        children: [
          /*#__PURE__*/ _jsx("label", {
            children: "Votre nom"
          }),
          /*#__PURE__*/ _jsx("input", {
            placeholder: "Noms",
            name: "Name",
            required: true
          })
        ]
      }),
      /*#__PURE__*/ _jsxs("div", {
        className: "input-labeled",
        children: [
          /*#__PURE__*/ _jsx("label", {
            children: "Adresse e-mail"
          }),
          /*#__PURE__*/ _jsx("input", {
            placeholder: "Adresse e-mail",
            name: "Email",
            required: true
          })
        ]
      }),
      /*#__PURE__*/ _jsxs("div", {
        className: "input-labeled",
        children: [
          /*#__PURE__*/ _jsx("label", {
            children: "Message"
          }),
          /*#__PURE__*/ _jsx("textarea", {
            placeholder: "Message",
            name: "Message",
            required: true
          })
        ]
      }),
      /*#__PURE__*/ _jsxs("div", {
        className: "flex-row column-gap-middle text-close",
        children: [
          errorMessage.length
            ? /*#__PURE__*/ _jsx("p", {
                className: "p-error",
                children: errorMessage
              })
            : /*#__PURE__*/ _jsx(_Fragment, {}),
          successMessage.length
            ? /*#__PURE__*/ _jsx("p", {
                className: "p-success",
                children: successMessage
              })
            : /*#__PURE__*/ _jsx(_Fragment, {}),
          errorMessage.length || successMessage.length
            ? /*#__PURE__*/ _jsx("p", {
                className: "close",
                onClick: (event) => {
                  event.stopPropagation();
                  setSuccess("");
                  setError("");
                },
                children: "Fermer"
              })
            : /*#__PURE__*/ _jsx(_Fragment, {})
        ]
      }),
      /*#__PURE__*/ _jsx("button", {
        className: `${isAsync ? "loading-button" : ""}`,
        type: "submit",
        children: isAsync
          ? "S'il vous plaît, attendez..."
          : "Envoyer le message"
      })
    ]
  });
}

function EoiForm({ id = "", onClose = () => {} }) {
  const [isAsync, setAsync] = React.useState(false);
  const [errorMessage, setError] = React.useState("");
  const [successMessage, setSuccess] = React.useState("");
  const [formData, setForm] = React.useState(new FormData());
  const formRef = React.useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess("");
    setError("");
    console.log(formData.entries);
    setAsync(true);
    formData.set("EOI", id);
    postDataWithFiles({
      url: "job/eointerest",
      data: formData
    }).then((response) => {
      setAsync(false);

      if (response.saved) {
        setSuccess("Votre candidature a été envoyé avec succès");
        formRef.current.reset();
        setForm(new FormData());
      } else {
        console.log("Failure", response);
        setError(
          "Une erreur s'est produite, vérifiez votre connexion Internet, puis réessayez."
        );
      }
    });
  };

  return /*#__PURE__*/ _jsxs("form", {
    ref: formRef,
    className: "contact-form eoi-form",
    onSubmit: handleSubmit,
    children: [
      /*#__PURE__*/ _jsxs("div", {
        className: "flex-row application-form-header",
        children: [
          /*#__PURE__*/ _jsx("h1", {}),
          /*#__PURE__*/ _jsx("i", {
            className: "fa fa-xmark action-icon",
            onClick: (event) => {
              event.stopPropagation();
              onClose();
            }
          })
        ]
      }),
      /*#__PURE__*/ _jsxs("div", {
        className: "input-labeled",
        children: [
          /*#__PURE__*/ _jsx("label", {
            children: "Nom de l'entreprise"
          }),
          /*#__PURE__*/ _jsx("input", {
            type: "name",
            placeholder: "Entreprise",
            name: "Name",
            required: true,
            onChange: (e) => {
              e.stopPropagation();
              formData.set("Name", e.target.value);
            }
          })
        ]
      }),
      /*#__PURE__*/ _jsxs("div", {
        className: "input-labeled",
        children: [
          /*#__PURE__*/ _jsx("label", {
            children: "Adresse e-mail"
          }),
          /*#__PURE__*/ _jsx("input", {
            type: "email",
            placeholder: "Adresse e-mail",
            name: "Email",
            required: true,
            onChange: (e) => {
              e.stopPropagation();
              formData.set("Email", e.target.value);
            }
          })
        ]
      }),
      /*#__PURE__*/ _jsxs("div", {
        className: "input-labeled",
        children: [
          /*#__PURE__*/ _jsx("label", {
            children: "Document"
          }),
          /*#__PURE__*/ _jsx("input", {
            type: "file",
            placeholder: "Document",
            name: "Document",
            required: true,
            onChange: (e) => {
              e.stopPropagation();
              formData.set("Document", e.target.files[0]);
            }
          })
        ]
      }),
      /*#__PURE__*/ _jsxs("div", {
        className: "flex-row column-gap-middle text-close",
        children: [
          errorMessage.length
            ? /*#__PURE__*/ _jsx("p", {
                className: "p-error",
                children: errorMessage
              })
            : /*#__PURE__*/ _jsx(_Fragment, {}),
          successMessage.length
            ? /*#__PURE__*/ _jsx("p", {
                className: "p-success",
                children: successMessage
              })
            : /*#__PURE__*/ _jsx(_Fragment, {}),
          errorMessage.length || successMessage.length
            ? /*#__PURE__*/ _jsx("p", {
                className: "close",
                onClick: (event) => {
                  event.stopPropagation();
                  setSuccess("");
                  setError("");
                },
                children: "Fermer"
              })
            : /*#__PURE__*/ _jsx(_Fragment, {})
        ]
      }),
      /*#__PURE__*/ _jsx("button", {
        className: `${isAsync ? "loading-button" : ""}`,
        type: "submit",
        children: isAsync ? "S'il vous plaît, attendez..." : "Envoyer"
      })
    ]
  });
}

function Products({ products = [] }) {
  function handleActions({ isNext = true }) {
    if (isNext && index < products.length - 1) {
      setIndex(index + 1);
    }

    if (!isNext && index > 0) {
      setIndex(index - 1);
    }
  }

  console.log(typeof window.location.hash);
  const hash = window.location.hash;
  const [index, setIndex] = React.useState(Number(hash.replaceAll("#", "")));
  const currentProduct = products[index];
  React.useEffect(() => {
    window.addEventListener(
      "hashchange",
      function set() {
        const hashF = window.location.hash;
        setIndex(Number(hashF.replaceAll("#", "")));
      },
      false
    );
    return () => {
      window.removeEventListener("hashchange", () => {}, false);
    };
  }, []);
  return products.length
    ? /*#__PURE__*/ _jsxs(
        "div",
        {
          className: "products-displayer",
          children: [
            /*#__PURE__*/ _jsxs("div", {
              className: "products-displayer-details",
              children: [
                /*#__PURE__*/ _jsx(ImagesDisplayer, {
                  images:
                    currentProduct === null || currentProduct === void 0
                      ? void 0
                      : currentProduct.images.map((e) => e.link)
                }),
                /*#__PURE__*/ _jsxs("div", {
                  className: "row-gap-middle",
                  children: [
                    /*#__PURE__*/ _jsx("h1", {
                      className: "headline1",
                      children:
                        currentProduct === null || currentProduct === void 0
                          ? void 0
                          : currentProduct.name
                    }),
                    /*#__PURE__*/ _jsx("p", {
                      className: "p-medium",
                      children:
                        currentProduct === null || currentProduct === void 0
                          ? void 0
                          : currentProduct.description
                    })
                  ]
                })
              ]
            }),
            /*#__PURE__*/ _jsxs("div", {
              className: "products-displayer-actions",
              children: [
                /*#__PURE__*/ _jsx("i", {
                  className: "fa fa-arrow-left",
                  onClick: (event) => {
                    event.stopPropagation();
                    handleActions({
                      isNext: false
                    });
                  }
                }),
                /*#__PURE__*/ _jsx("div", {
                  className: "l-indicator",
                  children: products.map((e, i) => {
                    const selected = i == index;
                    return /*#__PURE__*/ _jsx(
                      "span",
                      {
                        className: `${
                          selected ? "single-l-selected" : ""
                        } single-l`,
                        onClick: (event) => {
                          event.stopPropagation();
                          setIndex(i);
                        }
                      },
                      e.name
                    );
                  })
                }),
                /*#__PURE__*/ _jsx("i", {
                  className: "fa fa-arrow-right",
                  onClick: (event) => {
                    event.stopPropagation();
                    handleActions({
                      isNext: true
                    });
                  }
                })
              ]
            })
          ]
        },
        Math.random()
      )
    : /*#__PURE__*/ _jsx(_Fragment, {});
}

function ProductsList({ products = [] }) {
  var _localStorage$getItem;

  function handleCloseSideMenu() {
    document.querySelector(".side-menu").style.transform = "scaleX(0)";
  }

  const homePath =
    (_localStorage$getItem = localStorage.getItem("home")) !== null &&
    _localStorage$getItem !== void 0
      ? _localStorage$getItem
      : "/";
  return /*#__PURE__*/ _jsxs("div", {
    className: "contextual-arrow",
    children: [
      /*#__PURE__*/ _jsxs("a", {
        children: [
          "Nos produits",
          /*#__PURE__*/ _jsx("i", {
            className: "fa fa-caret-down"
          })
        ]
      }),
      /*#__PURE__*/ _jsx("div", {
        className: "contextual-menu",
        children: products.map((e, i) => {
          return /*#__PURE__*/ _jsx(
            "a",
            {
              href: `${homePath}products/#${i}`,
              onClick: handleCloseSideMenu,
              children: e.name
            },
            e.name
          );
        })
      })
    ]
  });
}

function ProductsListFooter({ products = [] }) {
  var _localStorage$getItem2;

  function handleCloseSideMenu() {
    document.querySelector(".side-menu").style.transform = "scaleX(0)";
  }

  const homePath =
    (_localStorage$getItem2 = localStorage.getItem("home")) !== null &&
    _localStorage$getItem2 !== void 0
      ? _localStorage$getItem2
      : "/";
  return /*#__PURE__*/ _jsx("div", {
    className: "foo-block",
    children: products.map((e, i) => {
      return /*#__PURE__*/ _jsx(
        "a",
        {
          href: `${homePath}products/#${i}`,
          children: e.name
        },
        e.name
      );
    })
  });
}

function ApplicationForm({ job = {}, onClose = () => {} }) {
  const [isAsync, setAsync] = React.useState(false);
  const [errorMessage, setError] = React.useState("");
  const [successMessage, setSuccess] = React.useState("");
  const [formData, setForm] = React.useState(new FormData());
  const formRef = React.useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    formData.set("Job_id", job.id);
    setSuccess("");
    setError("");
    console.log(formData.entries);
    setAsync(true);
    postDataWithFiles({
      url: "job/write/application_namespace",
      data: formData
    }).then((response) => {
      setAsync(false);

      if (response.id) {
        setSuccess("Votre candidature a été envoyé avec succès");
        formRef.current.reset();
        setForm(new FormData());
      } else {
        console.log("Failure", response);
        setError(
          "Une erreur s'est produite, vérifiez votre connexion Internet, puis réessayez."
        );
      }
    });
  };

  return /*#__PURE__*/ _jsx("div", {
    className: "modal-curtain",
    children: /*#__PURE__*/ _jsxs("form", {
      ref: formRef,
      className: "contact-form application-form",
      onSubmit: handleSubmit,
      children: [
        /*#__PURE__*/ _jsxs("div", {
          className: "flex-row application-form-header",
          children: [
            /*#__PURE__*/ _jsxs("h1", {
              children: [
                "Formulaire de candidature pour ",
                job === null || job === void 0 ? void 0 : job.title
              ]
            }),
            /*#__PURE__*/ _jsx("i", {
              className: "fa fa-xmark action-icon",
              onClick: (event) => {
                event.stopPropagation();
                onClose();
              }
            })
          ]
        }),
        /*#__PURE__*/ _jsx("div", {}),
        /*#__PURE__*/ _jsxs("div", {
          className: "input-labeled",
          children: [
            /*#__PURE__*/ _jsx("label", {
              children: "Votre nom complet"
            }),
            /*#__PURE__*/ _jsx("input", {
              type: "name",
              placeholder: "Noms",
              name: "Name",
              required: true,
              onChange: (e) => {
                e.stopPropagation();
                formData.set("Name", e.target.value);
              }
            })
          ]
        }),
        /*#__PURE__*/ _jsxs("div", {
          className: "input-labeled",
          children: [
            /*#__PURE__*/ _jsx("label", {
              children: "Adresse e-mail"
            }),
            /*#__PURE__*/ _jsx("input", {
              type: "email",
              placeholder: "Adresse e-mail",
              name: "Email",
              required: true,
              onChange: (e) => {
                e.stopPropagation();
                formData.set("Email", e.target.value);
              }
            })
          ]
        }),
        /*#__PURE__*/ _jsxs("div", {
          className: "input-labeled",
          children: [
            /*#__PURE__*/ _jsx("label", {
              children: "Votre CV"
            }),
            /*#__PURE__*/ _jsx("input", {
              type: "file",
              placeholder: "Cv",
              name: "Cv",
              required: true,
              onChange: (e) => {
                e.stopPropagation();
                formData.set("Cv", e.target.files[0]);
              }
            })
          ]
        }),
        /*#__PURE__*/ _jsxs("div", {
          className: "flex-row column-gap-middle text-close",
          children: [
            errorMessage.length
              ? /*#__PURE__*/ _jsx("p", {
                  className: "p-error",
                  children: errorMessage
                })
              : /*#__PURE__*/ _jsx(_Fragment, {}),
            successMessage.length
              ? /*#__PURE__*/ _jsx("p", {
                  className: "p-success",
                  children: successMessage
                })
              : /*#__PURE__*/ _jsx(_Fragment, {}),
            errorMessage.length || successMessage.length
              ? /*#__PURE__*/ _jsx("p", {
                  className: "close",
                  onClick: (event) => {
                    event.stopPropagation();
                    setSuccess("");
                    setError("");
                  },
                  children: "Fermer"
                })
              : /*#__PURE__*/ _jsx(_Fragment, {})
          ]
        }),
        /*#__PURE__*/ _jsx("button", {
          className: `${isAsync ? "loading-button" : ""}`,
          type: "submit",
          children: isAsync ? "S'il vous plaît, attendez..." : "Envoyer"
        })
      ]
    })
  });
}

function ApplicationEoiForm({ job = {}, onClose = () => {} }) {
  const [isAsync, setAsync] = React.useState(false);
  const [errorMessage, setError] = React.useState("");
  const [successMessage, setSuccess] = React.useState("");
  const [formData, setForm] = React.useState(new FormData());
  const formRef = React.useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    formData.set("Job_id", job.id);
    setSuccess("");
    setError("");
    console.log(formData.entries);
    setAsync(true);
    postDataWithFiles({
      url: "job/write/application_namespace",
      data: formData
    }).then((response) => {
      setAsync(false);

      if (response.id) {
        setSuccess("Votre candidature a été envoyé avec succès");
        formRef.current.reset();
        setForm(new FormData());
      } else {
        console.log("Failure", response);
        setError(
          "Une erreur s'est produite, vérifiez votre connexion Internet, puis réessayez."
        );
      }
    });
  };

  return /*#__PURE__*/ _jsx("div", {
    className: "modal-curtain",
    children: /*#__PURE__*/ _jsxs("section", {
      className: "duo eoi-form-parent",
      children: [
        /*#__PURE__*/ _jsxs("div", {
          className: "duo-left contact-info",
          children: [
            /*#__PURE__*/ _jsxs("div", {
              className: "contact-info-box",
              children: [
                /*#__PURE__*/ _jsx("h1", {
                  className: "large-title",
                  children: "Postuler"
                }),
                /*#__PURE__*/ _jsxs("p", {
                  children: [
                    "L'appel \xE0 manifestation d'int\xE9r\xEAt est un mode de pr\xE9s\xE9lection des candidats qui seront invit\xE9s \xE0 soumissionner lors de futures proc\xE9dures de passation de march\xE9s publics (appels d'offres restreints ou proc\xE9dure concurrentielle avec n\xE9gociation).",
                    /*#__PURE__*/ _jsx("br", {}),
                    "Remplissez le formulaire et notre \xE9quipe vous r\xE9pondra dans les 24 heures."
                  ]
                }),
                /*#__PURE__*/ _jsx("p", {
                  children:
                    "Tous les champs sont obligatoires. L'e-mail sera utilis\xE9 pour vous contacter, Le document que vous t\xE9l\xE9chargez doit contenir :"
                })
              ]
            }),
            /*#__PURE__*/ _jsxs("div", {
              className: "contact-info-box",
              children: [
                /*#__PURE__*/ _jsx("div", {
                  className: "single-contact flex-row column-gap-middle",
                  children: /*#__PURE__*/ _jsx("p", {
                    children:
                      "1. Informations sur le fournisseur (Raison sociale, adresse physique, t\xE9l\xE9phone, e-mail, NIF, RC, capacit\xE9 financi\xE8re, statut juridique , structure organisationnelle)"
                  })
                }),
                /*#__PURE__*/ _jsx("div", {
                  className: "single-contact flex-row column-gap-middle",
                  children: /*#__PURE__*/ _jsx("p", {
                    children:
                      "2. Exp\xE9rience (CV, certificat de service, autres pi\xE8ces jointes)"
                  })
                }),
                /*#__PURE__*/ _jsx("div", {
                  className: "single-contact flex-row column-gap-middle",
                  children: /*#__PURE__*/ _jsx("p", {
                    children:
                      "3. Offre technique (D\xE9crivez ce que vous proposez)"
                  })
                })
              ]
            })
          ]
        }),
        /*#__PURE__*/ _jsx(EoiForm, {
          id: job.id,
          onClose: onClose
        })
      ]
    })
  });
}

function Jobs() {
  const [fetching, setFetching] = React.useState(false);
  const [jobs, setJobs] = React.useState([]);
  const [isAsync, setAsync] = React.useState(false);
  const [wannaApply, setWannaApply] = React.useState(false);
  const [currentJob, setCurrentJob] = React.useState({});

  function fetchJobs() {
    if (!fetching) {
      setFetching(true);
      setAsync(true);
      fetchData("job/findmany/offer_namespace").then((response) => {
        setFetching(false);
        setAsync(false);
        const { data } = response;

        if (data && (data === null || data === void 0 ? void 0 : data.length)) {
          setJobs(response.data);
        }

        console.log(response);
      });
    }
  }

  React.useEffect(() => {
    fetchJobs();
  }, []);
  return /*#__PURE__*/ _jsxs("div", {
    className: "job-displayer",
    children: [
      wannaApply && jobs.length
        ? /*#__PURE__*/ _jsx(ApplicationForm, {
            job: currentJob,
            onClose: () => {
              setWannaApply(false);
              setCurrentJob({});
            }
          })
        : /*#__PURE__*/ _jsx(_Fragment, {}),
      /*#__PURE__*/ _jsx("h1", {
        className: "large-title",
        children: "Offre d'emploi"
      }),
      jobs.length
        ? /*#__PURE__*/ _jsx("div", {
            className: "jobs",
            children: jobs.map((e) => {
              const { id, description, limit_day_to_submit, document, title } =
                e;
              return /*#__PURE__*/ _jsxs(
                "div",
                {
                  className: "single-job",
                  children: [
                    /*#__PURE__*/ _jsxs("div", {
                      className: "job-header flex-row column-gap-middle",
                      children: [
                        /*#__PURE__*/ _jsx("p", {
                          className: "p-medium bold",
                          children: title
                        }),
                        /*#__PURE__*/ _jsx("button", {
                          onClick: (event) => {
                            event.stopPropagation();
                            setCurrentJob(e);
                            setWannaApply(true);
                          },
                          children: "Postuler"
                        })
                      ]
                    }),
                    /*#__PURE__*/ _jsx("div", {
                      dangerouslySetInnerHTML: {
                        __html: description
                      }
                    }),
                    /*#__PURE__*/ _jsxs("p", {
                      children: [
                        "Obtenez la description compl\xE8te de cette offre ",
                        /*#__PURE__*/ _jsx("a", {
                          href: document,
                          target: "_blank",
                          className: "bold",
                          children: "ici"
                        }),
                        "."
                      ]
                    }),
                    /*#__PURE__*/ _jsxs("p", {
                      children: [
                        "Date limite ",
                        new Date(limit_day_to_submit).toLocaleDateString(
                          "fr-FR",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                          }
                        )
                      ]
                    })
                  ]
                },
                id
              );
            })
          })
        : isAsync === true
        ? /*#__PURE__*/ _jsx("p", {
            children: "Veuillez patienter ..."
          })
        : /*#__PURE__*/ _jsx("p", {
            children: "Aucune offre d'emploi disponible"
          })
    ]
  });
}

function Eois() {
  const [fetching, setFetching] = React.useState(false);
  const [jobs, setJobs] = React.useState([]);
  const [isAsync, setAsync] = React.useState(false);
  const [wannaApply, setWannaApply] = React.useState(false);
  const [currentJob, setCurrentJob] = React.useState({});

  function fetchJobs() {
    if (!fetching) {
      setFetching(true);
      setAsync(true);
      fetchData("job/findmany/eoi_offer").then((response) => {
        setFetching(false);
        setAsync(false);
        const { data } = response;

        if (data && (data === null || data === void 0 ? void 0 : data.length)) {
          setJobs(response.data);
        }

        console.log(response);
      });
    }
  }

  React.useEffect(() => {
    fetchJobs();
  }, []);
  return /*#__PURE__*/ _jsxs("div", {
    className: "job-displayer",
    children: [
      wannaApply && jobs.length
        ? /*#__PURE__*/ _jsx(ApplicationEoiForm, {
            job: currentJob,
            onClose: () => {
              setWannaApply(false);
              setCurrentJob({});
            }
          })
        : /*#__PURE__*/ _jsx(_Fragment, {}),
      /*#__PURE__*/ _jsx("h1", {
        className: "large-title",
        children: "March\xE9s publics"
      }),
      jobs.length
        ? /*#__PURE__*/ _jsx("div", {
            className: "jobs",
            children: jobs.map((e) => {
              console.log(e);
              const { id, description, limit_day_to_submit, document, title } =
                e;
              return /*#__PURE__*/ _jsxs(
                "div",
                {
                  className: "single-job",
                  children: [
                    /*#__PURE__*/ _jsxs("div", {
                      className: "job-header flex-row column-gap-middle",
                      children: [
                        /*#__PURE__*/ _jsx("p", {
                          className: "p-medium bold",
                          children: title
                        }),
                        /*#__PURE__*/ _jsx("button", {
                          onClick: (event) => {
                            event.stopPropagation();
                            setCurrentJob(e);
                            setWannaApply(true);
                          },
                          children: "Postuler"
                        })
                      ]
                    }),
                    /*#__PURE__*/ _jsx("div", {
                      dangerouslySetInnerHTML: {
                        __html: description
                      }
                    }),
                    /*#__PURE__*/ _jsxs("p", {
                      children: [
                        "Obtenez la description compl\xE8te de cette offre ",
                        /*#__PURE__*/ _jsx("a", {
                          href: document,
                          target: "_blank",
                          className: "bold",
                          children: "ici"
                        }),
                        "."
                      ]
                    })
                  ]
                },
                id
              );
            })
          })
        : isAsync === true
        ? /*#__PURE__*/ _jsx("p", {
            children: "Veuillez patienter ..."
          })
        : /*#__PURE__*/ _jsx("p", {
            children: "Aucun march\xE9 public disponible"
          })
    ]
  });
}

function Agencies() {
  const [fetching, setFetching] = React.useState(false);
  const [jobs, setJobs] = React.useState([]);
  const [isAsync, setAsync] = React.useState(false);
  const [wannaApply, setWannaApply] = React.useState(false);
  const [currentJob, setCurrentJob] = React.useState({});

  function fetchJobs() {
    if (!fetching) {
      setFetching(true);
      setAsync(true);
      fetchData("blog/findmany/agence_namespace").then((response) => {
        setFetching(false);
        setAsync(false);
        const { data } = response;

        if (data && (data === null || data === void 0 ? void 0 : data.length)) {
          setJobs(response.data);
        }

        console.log(response);
      });
    }
  }

  React.useEffect(() => {
    fetchJobs();
  }, []);
  return /*#__PURE__*/ _jsxs("div", {
    className: "job-displayer",
    children: [
      wannaApply && jobs.length
        ? /*#__PURE__*/ _jsx(ApplicationForm, {
            job: currentJob,
            onClose: () => {
              setWannaApply(false);
              setCurrentJob({});
            }
          })
        : /*#__PURE__*/ _jsx(_Fragment, {}),
      /*#__PURE__*/ _jsx("h1", {
        className: "large-title",
        children: "Nos agences"
      }),
      jobs.length
        ? /*#__PURE__*/ _jsx("div", {
            className: "jobs",
            children: jobs.map((e) => {
              const { id, address, fax, phone, name } = e;
              return /*#__PURE__*/ _jsxs("div", {
                children: [
                  /*#__PURE__*/ _jsx("h1", {
                    children: name
                  }),
                  /*#__PURE__*/ _jsx("p", {
                    children: address
                  }),
                  /*#__PURE__*/ _jsxs("p", {
                    children: ["Tel: ", phone]
                  }),
                  /*#__PURE__*/ _jsxs("p", {
                    children: ["Fax: (+257) ", fax]
                  })
                ]
              });
            })
          })
        : isAsync === true
        ? /*#__PURE__*/ _jsx("p", {
            children: "Veuillez patienter ..."
          })
        : /*#__PURE__*/ _jsx("p", {
            children: "Aucune agence disponible"
          })
    ]
  });
}

function Staff({ members = [] }) {
  return members.length
    ? /*#__PURE__*/ _jsxs("div", {
        className: "job-displayer staff-members-displayer",
        children: [
          /*#__PURE__*/ _jsx("h1", {
            className: "large-title",
            children: "Notre \xE9quipe"
          }),
          /*#__PURE__*/ _jsx("div", {
            className: "staff-members",
            children: members.map((e) => {
              const { id, name, phone, email, post, profile } = e;
              return /*#__PURE__*/ _jsxs("div", {
                className: "single-member",
                children: [
                  /*#__PURE__*/ _jsx("img", {
                    src: profile,
                    alt: name
                  }),
                  /*#__PURE__*/ _jsxs("div", {
                    className: "single-member-info",
                    children: [
                      /*#__PURE__*/ _jsx("p", {
                        className: "p-medium bold",
                        children: name
                      }),
                      /*#__PURE__*/ _jsx("p", {
                        className: "p-medium",
                        children: post
                      })
                    ]
                  })
                ]
              });
            })
          })
        ]
      })
    : /*#__PURE__*/ _jsx(_Fragment, {});
}

function Covers({ covers = undefined }) {
  const coversOfficial =
    covers !== null && covers !== void 0
      ? covers
      : [
          "../assets/Ngozieco1.jpg.png",
          "../assets/bdi_burundi_brewery_02_2020_akezanet.jpeg",
          "../assets/338026326_203453539052971_8476777654635275942_n.jpg"
        ].map((e) => {
          return {
            link: e
          };
        });
  let slideIndex = 0;

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
  }

  React.useEffect(() => {
    if (coversOfficial.length) {
      showSlides();
    }
  }, []);
  console.log(coversOfficial);
  return coversOfficial.length
    ? /*#__PURE__*/ _jsx("div", {
        className: "slideshow-container",
        style: {
          backgroundImage: `url(${coversOfficial[0].link})`
        },
        children: coversOfficial.map((e) => {
          return /*#__PURE__*/ _jsx("div", {
            className: "mySlides fade",
            children: /*#__PURE__*/ _jsx("img", {
              src: e.link
            })
          });
        })
      })
    : /*#__PURE__*/ _jsx(_Fragment, {});
}

function NewsCategoriesDisplayer({ onChange = () => {} }) {
  const [fetching, setFetching] = React.useState(false);
  const [jobs, setJobs] = React.useState([]);
  const [isAsync, setAsync] = React.useState(false);
  const [currentJob, setCurrentJob] = React.useState(0);

  function fetchJobs() {
    if (!fetching) {
      setFetching(true);
      setAsync(true);
      fetchData("blog/findmany/blogcategory_namespace?limit=100").then(
        (response) => {
          setFetching(false);
          setAsync(false);
          const { data } = response;

          if (
            data &&
            (data === null || data === void 0 ? void 0 : data.length)
          ) {
            setJobs(response.data);
          }

          console.log(response);
        }
      );
    }
  }

  React.useEffect(() => {
    fetchJobs();
  }, []);
  return !isAsync
    ? /*#__PURE__*/ _jsx("div", {
        className: "categories_displayer",
        children: /*#__PURE__*/ _jsxs("div", {
          className: "categories_displayer_list_category",
          children: [
            /*#__PURE__*/ _jsx(
              "p",
              {
                className: "categories_displayer_category",
                id:
                  currentJob === 0
                    ? "categories_displayer_category_selected"
                    : "",
                value: 0,
                onClick: (event) => {
                  event.stopPropagation();

                  if (currentJob !== 0) {
                    setCurrentJob(0);
                    onChange(undefined);
                  }
                },
                children: "A la une"
              },
              0
            ),
            jobs.map((e) => {
              return /*#__PURE__*/ _jsx(
                "p",
                {
                  className: "categories_displayer_category",
                  id:
                    currentJob === e.id
                      ? "categories_displayer_category_selected"
                      : "",
                  value: e.id,
                  onClick: (event) => {
                    event.stopPropagation();

                    if (currentJob !== e.id) {
                      setCurrentJob(e.id);
                      onChange(e.id);
                    }
                  },
                  children: String(e.name).toLocaleUpperCase()
                },
                e.id
              );
            })
          ]
        })
      })
    : /*#__PURE__*/ _jsx("div", {
        className: "ct_displayer",
        children: /*#__PURE__*/ _jsxs("div", {
          className: "ct_displayer_category",
          children: [
            /*#__PURE__*/ _jsx("div", {
              className: "shimmer"
            }),
            /*#__PURE__*/ _jsx("div", {
              className: "shimmer"
            }),
            /*#__PURE__*/ _jsx("div", {
              className: "shimmer"
            }),
            /*#__PURE__*/ _jsx("div", {
              className: "shimmer"
            })
          ]
        })
      });
}

function News() {
  const [fetching, setFetching] = React.useState(false);
  const [jobs, setJobs] = React.useState([]);
  const [isAsync, setAsync] = React.useState(false);
  const [wannaApply, setWannaApply] = React.useState(false);
  const [currentJob, setCurrentJob] = React.useState({});
  const [currentCategoryId, setCatId] = React.useState(undefined);

  function fetchJobs({ id = undefined }) {
    const url =
      id !== undefined
        ? `findone/blogcategory_namespace/${Number(id)}?more=yes`
        : "findmany/blog_namespace?page=0";
    console.log("testtt", url);

    if (!fetching) {
      setFetching(true);
      setAsync(true);
      fetchData(`blog/${url}`).then((response) => {
        setFetching(false);
        setAsync(false);

        if (id !== undefined) {
          const { blog } = response;

          if (
            blog &&
            (blog === null || blog === void 0 ? void 0 : blog.length)
          ) {
            setJobs(blog);
          }
        } else {
          const { data } = response;

          if (
            data &&
            (data === null || data === void 0 ? void 0 : data.length)
          ) {
            setJobs(response.data);
          }
        }

        console.log(response);
      });
    }
  }

  React.useEffect(() => {
    fetchJobs({
      id: currentCategoryId
    });
  }, [currentCategoryId]);
  return /*#__PURE__*/ _jsxs("div", {
    className: "job-displayer",
    children: [
      /*#__PURE__*/ _jsx("h1", {
        className: "large-title",
        children: "Actualit\xE9s"
      }),
      /*#__PURE__*/ _jsx(NewsCategoriesDisplayer, {
        onChange: (id) => {
          setCatId(id);
        }
      }),
      jobs.length && !isAsync
        ? /*#__PURE__*/ _jsx("div", {
            className: "articles-displayer",
            children: jobs.map((article) => {
              var _article$category;

              return /*#__PURE__*/ _jsxs("a", {
                className: "article_card",
                href: `/article/#${article.id}`,
                children: [
                  /*#__PURE__*/ _jsx("img", {
                    className: "article_card_img",
                    src: article.cover
                      ? `${article.cover}`
                      : "https://archive.org/download/no-photo-available/no-photo-available.png",
                    alt: ""
                  }),
                  /*#__PURE__*/ _jsxs("div", {
                    className: "article_card_info",
                    children: [
                      /*#__PURE__*/ _jsxs("div", {
                        className: "timarticle_card_info_time_view",
                        children: [
                          /*#__PURE__*/ _jsx("p", {
                            children: new Date(
                              article.createdAt
                            ).toLocaleString()
                          }),
                          /*#__PURE__*/ _jsxs("div", {
                            className: "timarticle_card_info_time_view_eye",
                            children: [
                              /*#__PURE__*/ _jsx("i", {
                                className: "fa fa-eye"
                              }),
                              /*#__PURE__*/ _jsx("h6", {
                                children: article.view
                              })
                            ]
                          })
                        ]
                      }),
                      /*#__PURE__*/ _jsx("p", {
                        className: "article_card_info_topic",
                        children: String(
                          article === null || article === void 0
                            ? void 0
                            : (_article$category = article.category) === null ||
                              _article$category === void 0
                            ? void 0
                            : _article$category.name
                        ).toLocaleUpperCase()
                      }),
                      /*#__PURE__*/ _jsx("h3", {
                        className: "",
                        children:
                          article === null || article === void 0
                            ? void 0
                            : article.title
                      })
                    ]
                  })
                ]
              });
            })
          })
        : isAsync === true
        ? /*#__PURE__*/ _jsx("p", {
            children: "Veuillez patienter ..."
          })
        : /*#__PURE__*/ _jsx("p", {
            children: "Aucun article  disponible"
          })
    ]
  });
}

function ArticleDetails() {
  const [fetching, setFetching] = React.useState(false);
  const [jobs, setJobs] = React.useState([]);
  const [isAsync, setAsync] = React.useState(false);
  const [wannaApply, setWannaApply] = React.useState(false);
  const [currentJob, setCurrentJob] = React.useState({});
  const [article, setArticle] = React.useState({});

  function fetchJobs() {
    if (!fetching) {
      setFetching(true);
      setAsync(true);
      const hashF = window.location.hash;
      fetchData(
        `blog/findone/blog_namespace/${Number(
          hashF.replaceAll("#", "")
        )}?more=true`
      ).then((response) => {
        setFetching(false);
        setAsync(false);
        const { no_object } = response;

        if (!no_object) {
          setArticle(response);
          fetchMore({
            id: response.category.id,
            articleId: response.id
          });
        }

        console.log(response);
      });
    }
  }

  function fetchMore({ id = undefined, articleId = undefined }) {
    if (id === undefined) return;

    if (!fetching) {
      fetchData(
        `blog/findone/blogcategory_namespace/${Number(id)}?more=yes`
      ).then((response) => {
        const { blog } = response;

        if (blog && (blog === null || blog === void 0 ? void 0 : blog.length)) {
          setJobs(blog);
        }

        console.log(response);
      });
    }
  }

  React.useEffect(() => {
    fetchJobs();
    window.addEventListener(
      "hashchange",
      function set() {
        const hashF = window.location.hash;
        setArticle({});
        fetchJobs();
      },
      false
    );
    return () => {
      window.removeEventListener("hashchange", () => {}, false);
    };
  }, []);
  const {
    id,
    title,
    view,
    createdAt,
    overView,
    cover,
    description,
    comment,
    category
  } = article;
  const isThereMore = jobs.filter((element) => element.id !== id).length > 0;
  return /*#__PURE__*/ _jsx("div", {
    className: "job-displayer",
    children: Object.keys(article).length
      ? /*#__PURE__*/ _jsxs("div", {
          className: "article-details_diplayer",
          children: [
            /*#__PURE__*/ _jsxs("div", {
              className: "article_details_part",
              children: [
                /*#__PURE__*/ _jsxs("div", {
                  className: "article_details_part article_details_part_top",
                  children: [
                    /*#__PURE__*/ _jsx("img", {
                      src: cover
                        ? `${cover}`
                        : "https://archive.org/download/no-photo-available/no-photo-available.png",
                      alt: title !== null && title !== void 0 ? title : ""
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                      className: "timarticle_card_info_time_view",
                      children: [
                        /*#__PURE__*/ _jsx("p", {
                          children: createdAt
                            ? new Date(createdAt).toLocaleString()
                            : ""
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                          className: "timarticle_card_info_time_view_eye",
                          children: [
                            /*#__PURE__*/ _jsx("i", {
                              className: "fa fa-eye"
                            }),
                            /*#__PURE__*/ _jsx("h6", {
                              children:
                                view !== null && view !== void 0 ? view : 0
                            })
                          ]
                        })
                      ]
                    }),
                    /*#__PURE__*/ _jsx("p", {
                      className: "article_card_info_topic",
                      children: String(
                        category === null || category === void 0
                          ? void 0
                          : category.name
                      ).toLocaleUpperCase()
                    }),
                    /*#__PURE__*/ _jsx("h1", {
                      children: title !== null && title !== void 0 ? title : ""
                    }),
                    /*#__PURE__*/ _jsx("p", {
                      className: "art-overview",
                      children:
                        overView !== null && overView !== void 0 ? overView : ""
                    }),
                    /*#__PURE__*/ _jsx("div", {
                      className: "divider"
                    }),
                    /*#__PURE__*/ _jsx("div", {
                      dangerouslySetInnerHTML: {
                        __html:
                          description !== null && description !== void 0
                            ? description
                            : ""
                      }
                    })
                  ]
                }),
                /*#__PURE__*/ _jsx(ArticleDetailsComment, {
                  comments: comment,
                  articleId: id
                })
              ]
            }),
            /*#__PURE__*/ _jsxs("div", {
              children: [
                isThereMore
                  ? /*#__PURE__*/ _jsx("h2", {
                      className: "more_text",
                      children: "Plus d'articles"
                    })
                  : /*#__PURE__*/ _jsx(_Fragment, {}),
                /*#__PURE__*/ _jsx("div", {
                  className: "red_separator"
                }),
                /*#__PURE__*/ _jsx("div", {
                  className: "divider"
                }),
                /*#__PURE__*/ _jsx("div", {
                  className: "divider"
                }),
                /*#__PURE__*/ _jsx("div", {
                  className: "divider"
                }),
                /*#__PURE__*/ _jsx("div", {
                  className: "more-articles-displayer",
                  children: isThereMore
                    ? /*#__PURE__*/ _jsx(_Fragment, {
                        children: jobs
                          .filter((element) => element.id !== id)
                          .map((article) => {
                            var _article$category2;

                            return /*#__PURE__*/ _jsxs("a", {
                              className: "article_card_two",
                              href: `/article/#${article.id}`,
                              children: [
                                /*#__PURE__*/ _jsx("img", {
                                  className: "article_card_img_two",
                                  src: article.cover
                                    ? `${article.cover}`
                                    : "https://archive.org/download/no-photo-available/no-photo-available.png",
                                  alt:
                                    article === null || article === void 0
                                      ? void 0
                                      : article.title
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                  className:
                                    "article_card_info article_card_info_two",
                                  children: [
                                    /*#__PURE__*/ _jsxs("div", {
                                      className:
                                        "timarticle_card_info_time_view",
                                      children: [
                                        /*#__PURE__*/ _jsx("p", {
                                          children: new Date(
                                            article.createdAt
                                          ).toLocaleString()
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                          className:
                                            "timarticle_card_info_time_view_eye",
                                          children: [
                                            /*#__PURE__*/ _jsx("i", {
                                              className: "fa fa-eye"
                                            }),
                                            /*#__PURE__*/ _jsx("h6", {
                                              children: article.view
                                            })
                                          ]
                                        })
                                      ]
                                    }),
                                    /*#__PURE__*/ _jsx("p", {
                                      className: "article_card_info_topic",
                                      children: String(
                                        article === null || article === void 0
                                          ? void 0
                                          : (_article$category2 =
                                              article.category) === null ||
                                            _article$category2 === void 0
                                          ? void 0
                                          : _article$category2.name
                                      ).toLocaleUpperCase()
                                    }),
                                    /*#__PURE__*/ _jsx("h3", {
                                      className: "",
                                      children:
                                        article === null || article === void 0
                                          ? void 0
                                          : article.title
                                    })
                                  ]
                                })
                              ]
                            });
                          })
                      })
                    : /*#__PURE__*/ _jsx(_Fragment, {})
                })
              ]
            })
          ]
        })
      : isAsync === true
      ? /*#__PURE__*/ _jsx("p", {
          children: "Veuillez patienter ..."
        })
      : /*#__PURE__*/ _jsx("p", {
          children: "Article introuvable"
        })
  });
}

function ArticleDetailsComment({ comments = [], articleId = undefined }) {
  const [email, setEmail] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);
  const [errorMessage, setError] = React.useState("");
  const [successMessage, setSuccess] = React.useState("");
  const [incomments, setComments] = React.useState([]);
  const formRef = React.useRef();

  function sendMail() {
    setSuccess("");
    setError("");

    if (email.length) {
      setLoading(true);
      postData(
        `blog/comment_on_post/${Number(
          articleId !== null && articleId !== void 0 ? articleId : 0
        )}`,
        {
          Text: email
        }
      ).then((response) => {
        setLoading(false);

        if (response.id) {
          setComments([response, ...incomments]);
          setSuccess("Votre commentaire a été enregistré avec succès");
          formRef.current.reset();
        } else {
          console.log("Failure", response);
          setError(
            "Une erreur s'est produite,vérifiez votre connexion Internet."
          );
        }
      });
    } else {
      setError("Tout les champs sont obligatoires.");
    }
  }

  React.useEffect(() => {
    setComments(comments);
  }, []);
  return /*#__PURE__*/ _jsxs(_Fragment, {
    children: [
      /*#__PURE__*/ _jsxs("div", {
        className: "flex-row column-gap-middle text-close",
        children: [
          errorMessage.length
            ? /*#__PURE__*/ _jsx("p", {
                className: "p-error",
                children: errorMessage
              })
            : /*#__PURE__*/ _jsx(_Fragment, {}),
          successMessage.length
            ? /*#__PURE__*/ _jsx("p", {
                className: "p-success",
                children: successMessage
              })
            : /*#__PURE__*/ _jsx(_Fragment, {}),
          errorMessage.length || successMessage.length
            ? /*#__PURE__*/ _jsx("p", {
                className: "close",
                onClick: (event) => {
                  event.stopPropagation();
                  setSuccess("");
                  setError("");
                },
                children: "Fermer"
              })
            : /*#__PURE__*/ _jsx(_Fragment, {})
        ]
      }),
      /*#__PURE__*/ _jsxs("form", {
        ref: formRef,
        className: "form-row-s-button",
        onChange: (event) => {
          event.stopPropagation();
          setEmail(event.target.value);
        },
        onSubmit: (event) => {
          event.preventDefault();
          sendMail();
        },
        children: [
          /*#__PURE__*/ _jsx("input", {
            required: true,
            type: "text",
            placeholder: "Dites-nous ce que vous avez en t\xEAte...",
            name: "Text"
          }),
          /*#__PURE__*/ _jsx("button", {
            className: "comments_articles_input_button",
            type: "submit",
            children: isLoading
              ? /*#__PURE__*/ _jsx("i", {
                  className: "fa fa-spinner fa-spin"
                })
              : /*#__PURE__*/ _jsx("i", {
                  className: "fa fa-paper-plane"
                })
          })
        ]
      }),
      /*#__PURE__*/ _jsx("div", {
        className: "divider"
      }),
      incomments.length
        ? /*#__PURE__*/ _jsx("div", {
            className: "comments_articles_comments_list",
            children: incomments.map((e) => {
              return /*#__PURE__*/ _jsxs(
                "div",
                {
                  className: "comments_articles_comment",
                  children: [
                    /*#__PURE__*/ _jsxs("div", {
                      className: "comments_articles_comment_header",
                      children: [
                        /*#__PURE__*/ _jsx("img", {
                          src: `https://avatars.dicebear.com/api/personas/male/${Math.floor(
                            Math.random() * 46542655127517
                          )}.png`,
                          alt: ""
                        }),
                        /*#__PURE__*/ _jsx("p", {
                          children: new Date(e.createdAt).toLocaleString()
                        })
                      ]
                    }),
                    /*#__PURE__*/ _jsx("p", {
                      id: "comments_articles_comment_body",
                      children: e.content
                    })
                  ]
                },
                e.id
              );
            })
          })
        : /*#__PURE__*/ _jsx(_Fragment, {})
    ]
  });
}

function doThisForAll(key, whatToDo) {
  if (document.querySelector(key)) {
    document.querySelectorAll(key).forEach((element) => {
      whatToDo(element);
    });
  }
}

function ReactCompRender(id, component) {
  if (!id) return;
  doThisForAll(`#${id}`, (element) => {
    ReactDOM.createRoot(element).render(component);
  });
}

fetchData("blog/view").then((response) => {
  console.log("Theee", response);
  const { cover, group_image, member, product } = response;
  const dummProducts = [];
  ReactCompRender(
    "products",
    /*#__PURE__*/ _jsx(Products, {
      products: product
    })
  );
  ReactCompRender(
    "products-alizer",
    /*#__PURE__*/ _jsx(ProductsList, {
      products: dummProducts
    })
  );
  ReactCompRender(
    "products-footer",
    /*#__PURE__*/ _jsx(ProductsListFooter, {
      products: dummProducts
    })
  );
  ReactCompRender(
    "staff",
    /*#__PURE__*/ _jsx(Staff, {
      members: member
    })
  );
  ReactCompRender(
    "media",
    /*#__PURE__*/ _jsx(Gallery, {
      events: group_image
    })
  ); //ReactCompRender('slide-from', <Covers covers={cover} />);
});
ReactCompRender("slide-from", /*#__PURE__*/ _jsx(Covers, {}));
ReactCompRender(
  "newsLetterForm",
  /*#__PURE__*/ _jsx(SubscribeToNewsLetter, {})
);
ReactCompRender("contact-us-form", /*#__PURE__*/ _jsx(ContactUsForm, {}));
ReactCompRender("jobs", /*#__PURE__*/ _jsx(Jobs, {}));
ReactCompRender("news", /*#__PURE__*/ _jsx(News, {}));
ReactCompRender("view-article", /*#__PURE__*/ _jsx(ArticleDetails, {}));
ReactCompRender("eoi", /*#__PURE__*/ _jsx(Eois, {}));
ReactCompRender("agencies", /*#__PURE__*/ _jsx(Agencies, {}));
